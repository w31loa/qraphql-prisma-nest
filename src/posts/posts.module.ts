import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaModule } from 'src/providers/Prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PostsResolver, PostsService],
})
export class PostsModule {}
