import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({}));
  app.enableCors({});
  app.use(cookieParser());

  await app.listen(configService.get("PORT") ?? 5000);
}
bootstrap();
