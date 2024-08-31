import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Location } from "./entities/location.entity";
import { LocationService } from "./location.service";

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  exports: [LocationService],
  providers: [LocationService],
})
export class LocationModule {}
