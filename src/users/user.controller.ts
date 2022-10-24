import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from "./schemas/user.schema";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create.user.dto";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Post('add')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto.name);
    }
}