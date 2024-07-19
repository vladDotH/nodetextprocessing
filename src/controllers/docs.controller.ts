import Router from "koa-router";
import { koaSwagger } from "koa2-swagger-ui";
import specs from "@/swagger/swagger.json";
import { configService } from "@/services/config.service";

export const docsController = new Router({
  prefix: configService.SWAGGER_PREFIX,
});

docsController.get(
  "/",
  // #swagger.tags = ['Docs']
  koaSwagger({ routePrefix: false, swaggerOptions: { spec: specs } }),
);
