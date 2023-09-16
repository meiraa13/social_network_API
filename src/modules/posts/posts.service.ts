import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService){}

  async create(data: CreatePostDto, userId:number) {
    const newPost = await this.prisma.post.create({
      data: {
        content:data.content,
        user:{
          connect:{id:userId}
        }
      }
    })

    return newPost
  }

  async findAll() {
    const posts = await this.prisma.post.findMany({
      include:{
        user:true
      }
    })

    for(const post of posts){
      delete post.user.password
    } 
    return posts
  }

  async findOne(id: number) {
    const foundPost = await this.prisma.post.findUnique({
      where:{id}
    }) 

    if(!foundPost){
      throw new NotFoundException("post não encontrado")
    }
    return foundPost
  }

  async update(id: number, data: UpdatePostDto) {
    const updatedPost = await this.prisma.post.update({
      where:{id},
      data
    })
    return updatedPost
  }

  async remove(id: number) {
    await this.prisma.post.delete({
      where:{id}
    })
    
  }
}
