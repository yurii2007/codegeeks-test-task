import { BaseEntity } from "src/common/Database/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: "Location" })
export class Location extends BaseEntity {
  @Column({
    name: "Latitude",
    nullable: false,
    type: "decimal",
    precision: 10,
    scale: 8,
  })
  latitude: number;

  @Column({
    name: "Longitude",
    nullable: false,
    type: "decimal",
    precision: 10,
    scale: 8,
  })
  longitude: number;
}
