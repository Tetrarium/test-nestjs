import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./dto/user.interface";

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: Omit<User, "id">): User {
    if (this.isHasUser(user.name)) {
      throw new HttpException(`User ${user.name} already exists`, HttpStatus.CONFLICT)
    }
    const newUser: User = { ...user, id: Date.now() };
    this.users.push(newUser)
    return newUser;
  }

  isHasUser(username: string): Boolean {
    return !!this.users
      .find(user => user.name.toLowerCase() === username.toLowerCase());
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | null {
    return this.users.find(user => user.id === id) || null;
  }
}