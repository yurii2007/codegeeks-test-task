import {
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
import { User } from "src/common/decorators/user.decorator";
import { AccessTokenPayload } from "src/common/types/AccessTokenPayload";
import { UpdateEventDto } from "./dto/updateEvent.dto";
import { GetRecommendedQueryDto } from "./dto/getRecommended.dto";
import { isValidDate } from "src/common/helpers/isValidDate.helper";
import { GetEventsQueryDto } from "./dto/getEventsQuery.dto";
import { checkValidId } from "src/common/helpers/checkValidId";

@Controller("events")
export class EventController {
  constructor(private eventService: EventService) {}

  @Get("/")
  async getEvents(@User() user: AccessTokenPayload) {
    return this.eventService.getEvents(user.userId);
  }

  @Get("/sorted")
  async getFilteredEvents(@Query() query: GetEventsQueryDto) {
    return this.eventService.getSortedEvents(query);
  }

  @Get(":eventId")
  async getEventById(
    @User() user: AccessTokenPayload,
    @Param("eventId") eventId: string,
  ) {
    checkValidId(eventId, "Invalid Event id");
    return this.eventService.getEventById(+eventId, user.userId);
  }

  @Post("/")
  async createEvent(
    @Body() eventData: CreateEventDto,
    @User() user: AccessTokenPayload,
  ) {
    return this.eventService.createEvent(eventData, user.userId);
  }

  @Patch(":eventId")
  async updateEvent(
    @Param("eventId") eventId: string,
    @Body() eventData: UpdateEventDto,
    @User() user: AccessTokenPayload,
  ) {
    checkValidId(eventId, "Invalid Event id");
    return this.eventService.updateEvent(+eventId, eventData, user.userId);
  }

  @Delete(":eventId")
  @HttpCode(204)
  async deleteEvent(
    @Param("eventId") eventId: string,
    @User() user: AccessTokenPayload,
  ) {
    checkValidId(eventId, "Invalid Event id");
    await this.eventService.deleteEvent(+eventId, +user.userId);
    return;
  }

  @Get(":eventId/recommended")
  async getRecommendedEvents(
    @Param("eventId") eventId: string,
    @Query() query: GetRecommendedQueryDto,
  ) {
    checkValidId(eventId, "Invalid Event id");
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
