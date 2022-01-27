import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async getUserById(UserId: string) {
    const user = await this.usersRepository.findOne(UserId);
    return user;
  }

  async createUser(payload: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne(payload.email);

    if (existingUser) {
      throw new HttpException('Email already Exists', HttpStatus.BAD_REQUEST);
    } else {
      const user = this.usersRepository.create(payload);
      return await this.usersRepository.save(user);
    }
  }
}
