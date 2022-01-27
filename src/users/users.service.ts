import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './dto/users.dto';
import { Users } from './users.entity';
import { comparePasswords } from 'src/shared/utils';

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

  async findByPayload({ email }: any): Promise<CreateUserDto> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findByLogin({ email, password }: LoginUserDto): Promise<CreateUserDto> {
    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await comparePasswords(user.password, password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
