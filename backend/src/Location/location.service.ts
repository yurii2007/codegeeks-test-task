import { Injectable } from "@nestjs/common";
import { CreateLocationDto } from "./location.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Location } from "./entities/location.entity";
import { Repository } from "typeorm";

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepo: Repository<Location>,
  ) {}

  async createLocation(
    locationData: CreateLocationDto,
  ): Promise<Location | null> {
    try {
      const location = await this.locationRepo.save(locationData);
      return location;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
