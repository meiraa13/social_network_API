import {  Request,Response, NextFunction } from 'express';
import { NotFoundException, ConflictException} from "@nestjs/common"
import { verify } from "jsonwebtoken"


export function ensureTokenIsValidMiddleware(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization

    if(!authorization){
        throw new NotFoundException('Missing bearer token')
    }

    const token = authorization.split(' ')[1]

    verify(token, String(process.env.SECRET_KEY), (err:any, decoded:any) =>{
        if(err){
            throw new ConflictException(err.message )
        }
        
        res.locals.token = {
            id: decoded.sub,
            email: decoded.email
        }
    })

    next();
  };
