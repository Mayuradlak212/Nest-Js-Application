import { Controller, Get, UseGuards } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AuthGuard } from "@nestjs/passport";
@Controller("user")
export class UserController {
//     constructor(private readonly config:ConfigService){
//         let PORT =config.get<string>('PORT');
// console.log("PORT Config  ",PORT);
//     }
    @UseGuards(AuthGuard('local'))
    @Get()
    sayHello():string{
        return "Hello world";
    }
}