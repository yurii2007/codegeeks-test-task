import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { RegisterUserDto } from "src/Auth/dto/registerUser.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findUserByUsername(username: string): Promise<User | null> {
    const user = await this.userRepo.findOne({ where: { username } });
    return user;
  }

  async findUserById(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    return user;
  }

  async createUser(user: RegisterUserDto) {
    return await this.userRepo.save({ ...user, events: [] });
  }
}
