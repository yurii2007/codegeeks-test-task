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
import { Categories } from "src/common/types/CategoryEnum";
import { GetEventsQueryDto } from "./dto/getEventsQuery.dto";

const MAX_DISTANCE_DIFFERENCE = 2.5;

@Injectable()
export class EventService {
  constructor(
    private locationService: LocationService,
    @InjectRepository(Event) private readonly eventRepo: Repository<Event>,
    private userService: UserService,
  ) {}

  async getEvents(userId: number) {
    const events = await this.eventRepo.find({
      where: { owner: { id: userId } },
    });
    return events;
  }

  async getSortedEvents(query: GetEventsQueryDto) {
    const queryBuilder = this.eventRepo.createQueryBuilder("event");

    if (query.fromDate) {
      queryBuilder.where("event.date >= :fromDate", {
        fromDate: query.fromDate,
      });
    }

    if (query.toDate) {
      queryBuilder.andWhere("event.date <= :toDate", {
        toDate: query.toDate,
      });
    }

    if (query.category) {
      queryBuilder.andWhere("event.category = :category", {
        category: query.category,
      });
    }

    if (query.search) {
      queryBuilder.andWhere(
        "event.title ILIKE :search OR event.description ILIKE :search",
        { search: `%${query.search}%` },
      );
    }

    queryBuilder.limit(10);

    return queryBuilder.getMany();
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
        owner,
      });
      delete event.owner;
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

  async getEventById(eventId: number, userId: number) {
    await this.checkOwner(eventId, userId);

    const event = await this.eventRepo.findOne({ where: { id: eventId } });
    return event;
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

  async getRecommendedEvents({
    latitude,
    longitude,
    category,
    startDate,
    endDate,
    eventId,
  }: {
    latitude: number | null;
    longitude: number | null;
    category: Categories;
    startDate: Date | null;
    endDate: Date | null;
    eventId: number;
  }): Promise<Event[]> {
    const event = await this.eventRepo.findOne({
      where: { id: eventId },
      relations: ["location"],
    });
    if (!event) throw new BadRequestException("Event not found");
    const query = this.eventRepo
      .createQueryBuilder("event")
      .leftJoinAndSelect("event.location", "location")
      .leftJoinAndSelect("event.owner", "owner");

    if (event.location || (latitude && longitude)) {
      query.andWhere(
        `(
        6371 * acos(
          cos(radians(:latitude)) * cos(radians(location.latitude)) * 
          cos(radians(location.longitude) - radians(:longitude)) + 
          sin(radians(:latitude)) * sin(radians(location.latitude))
        ) <= :maxDistance
      )`,
        {
          latitude: latitude ?? event.location.latitude,
          longitude: longitude ?? event.location.longitude,
          maxDistance: MAX_DISTANCE_DIFFERENCE,
        },
      );
    }

    if (category) {
      query.andWhere("event.category = :category", { category });
    }

    if (startDate && endDate) {
      query.andWhere("event.date BETWEEN :startDate AND :endDate", {
        startDate,
        endDate,
      });
    } else if (startDate) {
      query.andWhere("event.date >= :startDate", { startDate });
    } else if (endDate) {
      query.andWhere("event.date <= :endDate", { endDate });
    }

    query.limit(10);

    return query.getMany();
  }
}
