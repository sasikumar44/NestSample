import { Controller, Param, Post, Get, Body, UsePipes } from '@nestjs/common';
import { ClassValidationPipe } from 'src/common/pipes/class.validation.pipe';
import { CreateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/:userId')
  @UsePipes(ClassValidationPipe)
  async getUserById(@Param('userId') userId: string) {
    const data = await this.userService.getUserById(userId);
    return data;
  }

  @Post()
  @UsePipes(ClassValidationPipe)
  async createUser(@Body() body: CreateUserDto) {
    const data = await this.userService.createUser(body);
    return { message: 'User Created Successfully', data };
  }
}
