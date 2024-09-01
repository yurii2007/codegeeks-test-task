import { BaseEntity } from "src/common/Database/entities/base.entity";
import { Event } from "src/Event/entities/event.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: "User" })
export class User extends BaseEntity {
  @Column({ name: "Username", unique: true, nullable: false })
  username: string;

  @OneToMany(() => Event, (event) => event.owner)
  events: Event[];

  @Column({ name: "password" })
  password: string;
}
