import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigurationModule } from "./common/Configuration/configuration.module";
import { DatabaseModule } from "./common/Database/database.module";
import { EventModule } from "./Event/event.module";
import { LocationModule } from "./Location/location.module";

@Module({
  imports: [ConfigurationModule, DatabaseModule, EventModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
