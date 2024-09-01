import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { LocationService } from "src/Location/location.service";
import { CreateEventDto } from "./dto/createEvent.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "./entities/event.entity";
import { Repository } from "typeorm";
import { UserService } from "src/User/user.service";
import { UpdateEventDto } from "./dto/updateEvent.dto";

@Injectable()
export class EventService {
  constructor(
    private locationService: LocationService,
    @InjectRepository(Event) private readonly eventRepo: Repository<Event>,
    private userService: UserService,
  ) {}

  async getEvents() {
    return [];
  }

  async createEvent(eventData: CreateEventDto, userId: number) {
    try {
      const location = await this.locationService.createLocation(
        eventData.location,
      );
      const owner = await this.userService.findUserById(userId);
      if (!owner) throw new BadRequestException("User not found");
      const event = await this.eventRepo.save({
        ...eventData,
        location,
        category: "category",
        owner,
      });
      return event;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateEvent(
    eventId: number,
    eventData: UpdateEventDto,
    userId: number,
  ) {
    await this.checkOwner(eventId, userId);

    const event = await this.eventRepo.findOne({
      where: { id: eventId },
      relations: ["owner"],
    });

    if (!event) throw new BadRequestException("Event not found");

    if (event.owner.id !== userId)
      throw new ForbiddenException("Access denied");

    const updatedEvent = await this.eventRepo.save({ ...event, ...eventData });

    return updatedEvent;
  }

  async deleteEvent(eventId: number, userId: number) {
    await this.checkOwner(eventId, userId);

    const event = await this.eventRepo.findOne({ where: { id: eventId } });
    await this.eventRepo.remove(event);
  }

  private async checkOwner(eventId: number, userId: number) {
    const event = await this.eventRepo.findOne({
      where: { id: eventId },
      relations: ["owner"],
    });
    if (!event) throw new BadRequestException("Event not found");

    if (event.owner.id !== userId)
      throw new ForbiddenException("Access denied");
  }
}
