import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { plainToInstance } from "class-transformer"

@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService){}

  async create(data: CreateUserDto):Promise<User>{
    const newUser = await this.prisma.user.create({
      data
    })

    return plainToInstance(User, newUser)
  }

  async findAll():Promise<User[]>{
    const users = await this.prisma.user.findMany()
    return plainToInstance(User, users)
  }

  async findOne(id: number):Promise<User | null>{
    const foundUser = await this.prisma.user.findUnique({
      where:{id}
    })

    if(!foundUser){
      throw new NotFoundException("usuário não encontrado")
    }

    return plainToInstance(User, foundUser)
  }

  async update(data: UpdateUserDto, id: number):Promise<User>{
    const updatedUser = await this.prisma.user.update({
      where:{id},
      data
    })

    return plainToInstance(User, updatedUser)
  }

  async remove(id: number):Promise<void>{
    await this.prisma.user.delete({
      where:{id}
    })
  }

  async findByEmail(email:string){
    return this.prisma.user.findUnique({
      where:{email}
    })
  }
}
