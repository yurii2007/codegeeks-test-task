import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { User } from "src/User/entities/user.entity";
import { UserService } from "src/User/user.service";
import { RegisterUserDto } from "./dto/registerUser.dto";
import { LoginUserDto } from "./dto/loginUser.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userService.findUserByUsername(username);

    if (!user) throw new NotFoundException("User not found");

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) throw new BadRequestException("Password does not match");

    return user;
  }

  async login(userData: LoginUserDto) {
    const user = await this.validateUser(userData.username, userData.password);
    if (!user) {
      throw new NotFoundException(
        `User with username ${userData.username} not found`,
      );
    }
    const payload = { username: user.username, userId: user.id };

    delete user.password;
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }

  async register(user: RegisterUserDto) {
    const existingUser = await this.userService.findUserByUsername(
      user.username,
    );
    if (existingUser) {
      throw new ConflictException(`User with username ${user.username} already exists`);
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = await this.userService.createUser({
      ...user,
      password: hashedPassword,
    });
    return this.login({
      username: newUser.username,
      password: user.password,
    });
  }
}
