import Joi from "joi";

export const FindStrDto = Joi.object<{ query: string; limit: number }>({
  query: Joi.string().required(),
  limit: Joi.number().default(-1),
});
