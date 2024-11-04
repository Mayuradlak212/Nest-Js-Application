import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [BookController],
  providers: [AppService],
  exports:[]
})
export class AppModule {
  constructor(){
    console.log('Root Module loaded');
}
}
