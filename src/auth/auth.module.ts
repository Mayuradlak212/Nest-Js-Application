import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserModel } from 'src/user/user.module';



@Module({
  imports: [UserModel],
  controllers: [],
  providers: [PassportLocalStrategy],
  exports:[]
})
export class AuthModel {
  constructor(){
    console.log('Auth Module loaded');
}
}
