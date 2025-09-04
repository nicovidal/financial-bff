import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),

    MongooseModule.forRoot(process.env.MONGODB!),
    LoginModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
