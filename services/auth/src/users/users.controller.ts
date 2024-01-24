import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor (private usersService: UsersService) {}

  @ApiQuery({name: 'name', required: false})
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    return this.usersService.findAll(name)
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.findUserById(Number(id))
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body)
  }
}
