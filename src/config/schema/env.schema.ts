import * as Joi from 'joi';

export const envSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'local')
    .default('development')
    .description('The application environment.'),
  PORT: Joi.number().default(3000).description('Port to listen on'),
  MONGO_URI: Joi.string().required().description('MongoDB URI'),
  DATABASE_HOST: Joi.string().required().description('Database hostname or IP address'),
  DATABASE_USERNAME: Joi.string().required().description('Database username'),
  DATABASE_PASSWORD: Joi.string().required().description('Database password'),
  DATABASE_NAME: Joi.string().required().description('Database name'),
  DATABASE_PORT:Joi.string().required().description('Database Port'),
  REDIS_URL: Joi.string().required().description('Redis URL'),
  MAILER_HOST: Joi.string().required().description('Mailer host'),
  MAILER_USERNAME: Joi.string().required().description('Mailer username'),
  MAILER_PASSWORD: Joi.string().required().description('Mailer password')
});



