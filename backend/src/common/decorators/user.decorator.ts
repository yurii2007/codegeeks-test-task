import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AccessTokenPayload } from "../types/AccessTokenPayload";

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as AccessTokenPayload;
  },
);
