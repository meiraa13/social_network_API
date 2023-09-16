import {  Request,Response, NextFunction } from 'express';
import { UnauthorizedException} from "@nestjs/common"



export function ensureIsOwnerMiddleware(req: Request, res: Response, next: NextFunction) {
    const tokenId = Number(res.locals.token.id)
    const userId = Number(req.params.id)

    if(tokenId !== userId){
        throw new UnauthorizedException()
    }
    
    next();
  };
