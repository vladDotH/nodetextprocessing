import Router from "koa-router";
import { textProcessingService } from "@/services/text-processing.service";
import { validate } from "@/util/validation";
import { FindStrDto } from "@/dto/text-processing";

export const textProcessingController = new Router({ prefix: "" });

textProcessingController.get("/", async (ctx) => {
  // #swagger.tags = ['Text processing']
  // #swagger.summary = 'Найти вхождение подстроки в файле'
  /*
  #swagger.parameters['limit'] = {
    "in": "query",
    "type": "number"
  }
  #swagger.parameters['query'] = {
    "in": "query"
  }
  */
  const inputData = validate(FindStrDto, ctx.request.query);
  const res = await textProcessingService.findLastOccurrence(
    inputData.query,
    inputData.limit,
  );

  if (res.line != null) ctx.status = 200;
  else ctx.status = 204;
  ctx.body = res;
});
