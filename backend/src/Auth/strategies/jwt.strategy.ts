import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AccessTokenPayload } from "src/common/types/AccessTokenPayload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const token = request?.cookies?.["jwt_token"];
          if (!token) {
            return null;
          }
          return token;
        },
      ]),
      secretOrKey: config.get("JWT_KEY"),
    });
  }

  validate(payload: AccessTokenPayload) {
    return payload;
  }
}
