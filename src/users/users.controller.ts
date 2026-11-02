import { Controller, Get, Param } from '@nestjs/common';
import { UsersService, type User } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get('details')
  findDetails(): User[] {
    return this.usersService.findDetails();
  }

  @Get('images')
  findImages(): string[] {
    return this.usersService.findImages();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.usersService.findOne(id);
  }

  @Get(':id/:sex/:depart')
  userFilter(
    @Param('id') id: string,
    @Param('sex') sex: string,
    @Param('depart') depart?: string,
  ): User[] {
    return this.usersService.userFilter(id, sex, depart ? Number(depart) : undefined);
  }
}