import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ensureTokenIsValidMiddleware } from 'src/middlewares/ensureToken.middleware';
import { ensureIsOwnerMiddleware } from 'src/middlewares/ensureIsOwner.middleware';

@Module({
  controllers: [UsersController],
  providers: [ UsersService, PrismaService ],
  exports:[UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(ensureTokenIsValidMiddleware, ensureIsOwnerMiddleware)
    .forRoutes({
      path: 'users/:id', method:RequestMethod.ALL
    })

  }
}
