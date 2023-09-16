import {  Request,Response, NextFunction } from 'express';
import { UnauthorizedException, NotFoundException} from "@nestjs/common"
import { Injectable, NestMiddleware } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';





@Injectable()
export class ensureIsPostOwnerMiddleware implements NestMiddleware {
    constructor(private prisma: PrismaService){}
    async use(req:Request, res:Response, next:NextFunction){
        const tokenId = Number(res.locals.token.id)
        const postId = Number(req.params.id)

        const foundPost = await this.prisma.post.findUnique({
            where:{id:postId},
        })
        if(!foundPost){
            throw new NotFoundException('post não encontrado')
        }

        if(foundPost.userId !== tokenId){
            throw new UnauthorizedException()
        }

        next();
    }

    
    
  };
