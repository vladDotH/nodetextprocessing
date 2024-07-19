import Router from "koa-router";

import { configService } from "@/services/config.service";
import { docsController } from "@/controllers/docs.controller";
import { textProcessingController } from "@/controllers/text-processing.controller";

export const apiController = new Router({
  prefix: `${configService.APP_PREFIX}`,
});

apiController.use(docsController.routes());
apiController.use(textProcessingController.routes());
