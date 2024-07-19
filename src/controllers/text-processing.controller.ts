import Router from "koa-router";
import { textProcessingService } from "@/services/text-processing.service";
import { validate } from "@/util/validation";
import Joi from "joi";

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
  const str = validate(Joi.string(), ctx.request.query.query);
  const limit = validate(Joi.number(), ctx.request.query.limit);
  const res = await textProcessingService.findLastOccurrence(str, limit);

  if (res.line != null) ctx.status = 200;
  else ctx.status = 204;
  ctx.body = res;
});
