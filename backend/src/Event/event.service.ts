import { Injectable } from "@nestjs/common";
import { LocationService } from "src/Location/location.service";
import { CreateEventDto } from "./event.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "./entities/event.entity";
import { Repository } from "typeorm";

@Injectable()
export class EventService {
  constructor(
    private locationService: LocationService,
    @InjectRepository(Event) private readonly eventRepo: Repository<Event>,
  ) {}

  async getEvents() {
    return [];
  }

  async createEvent(eventData: CreateEventDto) {
    try {
      const location = await this.locationService.createLocation(
        eventData.location,
      );
      const event = await this.eventRepo.save({
        ...eventData,
        location,
        category: "category",
      });
      return event;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
