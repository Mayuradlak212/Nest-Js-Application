import { Module, OnModuleInit } from '@nestjs/common';
import { BookModule } from "./book/book.module"
import { UserModel } from './user/user.module';
import { AuthModel } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { parse } from "url"
import { ClientModule } from './client/client.module';
// const dbUrl = "postgres://default:lmZi9uItBWx7@ep-proud-band-a45g0gy4.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";
// const parsedUrl = new URL(dbUrl);
// console.log("URL ", parsedUrl)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "sql.freedb.tech",
      port: 3306,
      username: 'freedb_mayur',
      password: 'KQr59gF!5vJ6x@S',
      database: "freedb_nestdb",
      // database: parsedUrl.pathname.slice(1),
      ssl: { rejectUnauthorized: false }, // To require SSL, use rejectUnauthorized accordingly
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      synchronize: true,
      // logging:true
    }),
    ClientModule,
    // Type
  ],
  // imports: [BookModule,UserModel,AuthModel,ConfigModule.forRoot({isGlobal: true})],
  // imports: [ConfigModule.forRoot({isGlobal: true,envFilePath:".env"})], // Enviroment Variable s
  controllers: [],
  providers: [],
  exports:[]
})
// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule.forRoot({isGlobal: true})],
//       useFactory: (config: ConfigService) => ({

//         "username": config.get("username"),
//         "password": config.get("password"),
//         "host": config.get("host"),
//         "type": "postgres",
//         "synchronize": true,
//         "autoLoadEntities": true,
//         "port": config.get("port"),
//         "pathname": config.get("pathname"),
//         entities: [__dirname + "/**/*.{.js.ts}"],
//         "hash": ""
//       }),  
//       inject:[ConfigService]
//     })
//   ],

//   controllers: [UserController],
//   providers: [],
//   exports: []
// })
export class AppModule implements OnModuleInit{
  constructor() {
    console.log('Root Module loaded');
  }
  async onModuleInit() {
    console.log('DB connected successfully');
  }
}
