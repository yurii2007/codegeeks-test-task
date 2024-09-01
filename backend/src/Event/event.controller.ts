import { Body, Controller, Get, Post } from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./event.dto";

@Controller("events")
export class EventController {
  constructor(private EventService: EventService) {}

  @Get("/")
  async getEvents() {
    return [];
  }

  @Post("/")
  async createEvent(@Body() eventData: CreateEventDto) {
    return await this.EventService.createEvent(eventData);
  }
}
