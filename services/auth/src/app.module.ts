import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OauthModule } from './oauth/oauth.module';

@Module({
  imports: [AuthModule, OauthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
