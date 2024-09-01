import { Module } from "@nestjs/common";
import { ConfigurationModule } from "./common/Configuration/configuration.module";
import { DatabaseModule } from "./common/Database/database.module";
import { EventModule } from "./Event/event.module";
import { LocationModule } from "./Location/location.module";
import { UserModule } from "./User/user.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtGuard } from "./common/guards/jwt.guard";
import { AuthModule } from "./Auth/auth.module";

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    EventModule,
    LocationModule,
    UserModule,
    AuthModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: JwtGuard }],
})
export class AppModule {}
