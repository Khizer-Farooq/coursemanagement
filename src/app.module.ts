import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigService } from '@nestjs/config';
@Module({
imports: [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  SequelizeModule.forRootAsync({
    inject:[ConfigService],
    useFactory:(config:ConfigService)=>({
        dialect:'postgres',
        host:config.get('DB_HOST'),
        port:Number(config.get('DB_PORT')),
        username:config.get('DB_USERNAME'),
        password:config.get('DB_PASSWORD'),
        database:config.get('DB_DATABASE'),
        autoLoadModels:true,
        synchronize:true,
    })
  })



],  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
