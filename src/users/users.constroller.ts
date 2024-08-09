import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./dto/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({}))
  create(@Body() createUserDto: CreateUserDto): User[] {
    this.service.create(createUserDto);
    return this.service.findAll();
  }
}