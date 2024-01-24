import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{id: 0, name: 'Megol', email: 'megol0@gmail.com'}]

  createUser(createUserDto: CreateUserDto): User {
    const newUser = {id: Date.now(), ...createUserDto}
    this.users.push(newUser);

    return newUser;
  }
  
  findAll(name?: string): User[] {
    if (name) return this.users.filter(user => user.name === name)
    return this.users;
  }

  findUserById(userId: number): any {
    return this.users.find(user => user.id === userId);
  }

}
