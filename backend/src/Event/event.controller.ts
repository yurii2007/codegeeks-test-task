import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/createEvent.dto";
import { User as ReqUser } from "src/common/decorators/user.decorator";
import { User } from "src/User/entities/user.entity";
import { Public } from "src/common/decorators/public.decorator";
import { AccessTokenPayload } from "src/common/types/AccessTokenPayload";
import { UpdateEventDto } from "./dto/updateEvent.dto";

@Controller("events")
export class EventController {
  constructor(private eventService: EventService) {}

  @Get("/")
  async getEvents(@ReqUser() user: User) {
    return [];
  }

  @Post("/")
  async createEvent(
    @Body() eventData: CreateEventDto,
    @ReqUser() user: AccessTokenPayload,
  ) {
    return await this.eventService.createEvent(eventData, user.userId);
  }

  @Patch(":eventId")
  async updateEvent(
    @Param("eventId") eventId: string,
    @Body() eventData: UpdateEventDto,
    @ReqUser() user: User,
  ) {
    if (isNaN(+eventId)) throw new BadRequestException("Invalid Event id");
    return await this.eventService.updateEvent(+eventId, eventData, user.id);
  }

  @Public()
  @Delete(":eventId")
  @HttpCode(204)
  async deleteEvent(
    @Param("eventId") eventId: string,
    @ReqUser() user: AccessTokenPayload,
  ) {
    if (isNaN(+eventId)) throw new BadRequestException("Invalid Event id");
    await this.eventService.deleteEvent(+eventId, +user.userId);
    return;
  }
}
