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
      }),
    }),
  ],
})
export class ConfigurationModule {}
