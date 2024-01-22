import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OauthModule } from './oauth/oauth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, OauthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
