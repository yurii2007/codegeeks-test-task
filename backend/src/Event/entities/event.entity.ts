import { BaseEntity } from "src/common/Database/entities/base.entity";
import { Location } from "src/Location/entities/location.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity({ name: "Event" })
export class Event extends BaseEntity {
  @Column({ name: "Title", nullable: false, type: "text" })
  title: string;

  @Column({ name: "Date", nullable: false, type: "timestamp" })
  date: Date;

  @OneToOne(() => Location, { onDelete: "CASCADE" })
  @JoinColumn({ name: "LocationId" })
  location: Location;

  @Column({ name: "Description", type: "text" })
  description: string;

  @Column({
    name: "Category",
    type: "enum",
    enumName: "Categories",
    enum: ["category"],
    nullable: false,
  })
  category: string;
}
