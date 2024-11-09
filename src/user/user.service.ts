import { Injectable } from "@nestjs/common";
import { Injector } from "@nestjs/core/injector/injector";
import { User } from "./user.entity"
@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "user1",
            email: "user1@gmail.com",
            password: "password1"
        },
        {
            username: "user2",
            email: "user2@gmail.com",
            password: "password1"
        },
        {
            username: "user3",
            email: "user3@gmail.com",
            password: "password1"
        },
        {
            username: "user4",
            email: "user4@gmail.com",
            password: "password1"
        },
        {
            username: "user5",
            email: "user5@gmail.com",
            password: "password1"
        },
    ];
    
    getUserByUserName(userName: string): User {
        return this.users.find((user) => user.username == userName)
    }
}