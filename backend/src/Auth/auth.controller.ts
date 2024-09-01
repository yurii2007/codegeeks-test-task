import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/registerUser.dto";
import { Public } from "src/common/decorators/public.decorator";
import { LoginUserDto } from "./dto/loginUser.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post("register")
  async register(@Body() body: RegisterUserDto) {
    return await this.authService.register(body);
  }

  @Public()
  @Post("login")
  async login(@Body() body: LoginUserDto) {
    return await this.authService.login(body);
  }
}
