import * as dotenv from "dotenv";

dotenv.config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/taskmanager'),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
