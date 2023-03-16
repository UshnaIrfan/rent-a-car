import * as Joi from 'joi';

export const envSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'local')
    .default('development')
    .description('The application environment.'),
  PORT: Joi.number().default(3000).description('Port to listen on'),
  MONGO_URI: Joi.string().required().description('MongoDB URI'),

});