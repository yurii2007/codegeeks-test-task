import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "./entities/event.entity";
import { EventController } from "./event.controller";
import { EventService } from "./event.service";
import { LocationModule } from "src/Location/location.module";

@Module({
  imports: [TypeOrmModule.forFeature([Event]), LocationModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
