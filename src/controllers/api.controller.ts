import Router from "koa-router";

import { configService } from "@/services/config.service";

export const apiController = new Router({
  prefix: `/${configService.APP_PREFIX}`,
});

apiController.get("", async (ctx, next) => {
  ctx.body = "Hello";
});
