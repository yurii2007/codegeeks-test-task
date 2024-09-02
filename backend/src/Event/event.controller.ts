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
  Query,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/createEvent.dto";
import { User as ReqUser } from "src/common/decorators/user.decorator";
import { User } from "src/User/entities/user.entity";
import { AccessTokenPayload } from "src/common/types/AccessTokenPayload";
import { UpdateEventDto } from "./dto/updateEvent.dto";
import { GetRecommendedQueryDto } from "./dto/getRecommended.dto";
import { isValidDate } from "src/common/helpers/isValidDate.helper";

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

  @Get(":eventId/recommended")
  async getRecommendedEvents(
    @Param("eventId") eventId: string,
    @Query() query: GetRecommendedQueryDto,
  ) {
    if (isNaN(+eventId)) throw new BadRequestException("Invalid Event id");
    return this.eventService.getRecommendedEvents({
      ...query,
      startDate: isValidDate(query.startDate)
        ? new Date(query.startDate)
        : null,
      endDate: isValidDate(query.endDate) ? new Date(query.endDate) : null,
      eventId: +eventId,
    });
  }
}
