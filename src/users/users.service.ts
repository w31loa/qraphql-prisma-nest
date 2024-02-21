import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/user/user-update.input';
import { PrismaService } from 'src/providers/Prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private readonly prisma:PrismaService){}

  async create(createUserInput:UserCreateInput){
    const newUser = await this.prisma.user.create({data:createUserInput})
    return newUser
  }

  async findAll() {
    const users = await this.prisma.user.findMany()
    return users
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({where: {id} })
    if(!user){
      throw new BadRequestException(`User with id = ${id} does not exist!`)
    }
    return user

  }

  async update(id: number, updateUserInput:UserUpdateInput) {
    const user = await this.prisma.user.findUnique({where: {id} })
    if(!user){
      throw new BadRequestException(`User with id = ${id} does not exist!`)
    }
    const updatedUser = await this.prisma.user.update({where: {id} , data: updateUserInput})
    return updatedUser;
    
  }

  async remove(id: number) {
    return  await this.prisma.user.delete({where: {id} });
  }
}
