import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { resolve } from "path";

const envFilePath = resolve(__dirname, "..", "..", "..", ".env");

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().optional(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DATABASE: Joi.string().required(),
        RUN_MIGRATIONS: Joi.boolean().required(),
        JWT_KEY: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigurationModule {}
