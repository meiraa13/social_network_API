import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ensureTokenIsValidMiddleware } from 'src/middlewares/ensureToken.middleware';
import { ensureIsPostOwnerMiddleware } from 'src/middlewares/ensureIsPostOwner.middleware';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
})
export class PostsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(ensureTokenIsValidMiddleware, ensureIsPostOwnerMiddleware)
      .forRoutes({
        path:'posts/:id', method:RequestMethod.PATCH
      },{
        path:'posts/:id', method:RequestMethod.DELETE
      })
  }
}
