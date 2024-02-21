import { BadRequestException, Injectable } from '@nestjs/common';
import { PostCreateInput } from 'src/@generated/post/post-create.input';
import { PostUpdateInput } from 'src/@generated/post/post-update.input';
import { PrismaService } from 'src/providers/Prisma/prisma.service';

@Injectable()
export class PostsService {

  constructor(private readonly prisma:PrismaService){}

  async create(createPostInput: PostCreateInput) {
    
    return  await this.prisma.post.create({data:createPostInput})
  }

  async findAll() {
    return await this.prisma.post.findMany()
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({where: {id} })
    if(!post){
      throw new BadRequestException(`Post with id = ${id} does not exist!`)
    }
    return post
  }

  async update(id: number, updatePostInput: PostUpdateInput) {
    const post = await this.prisma.post.findUnique({where: {id} })
    if(!post){
      throw new BadRequestException(`Post with id = ${id} does not exist!`)
    }

    return await this.prisma.post.update({where: {id} , data: updatePostInput })
  }

  async remove(id: number) {

    return this.prisma.post.delete({where: {id} })
  }
}
