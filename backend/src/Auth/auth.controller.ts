import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/registerUser.dto";
import { Public } from "src/common/decorators/public.decorator";
import { LoginUserDto } from "./dto/loginUser.dto";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post("register")
  async register(
    @Body() body: RegisterUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.authService.register(body);
    this.authService.setCookieResponse(res, "jwt_token", data.accessToken);
    return data.user;
  }

  @Public()
  @Post("login")
  async login(
    @Body() body: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.authService.login(body);
    this.authService.setCookieResponse(res, "jwt_token", data.accessToken);
    return data.user;
  }
}
