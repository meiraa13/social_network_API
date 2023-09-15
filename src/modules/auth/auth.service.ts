import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { JwtService} from "@nestjs/jwt"

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async signIn(email:string, pass:string){
        const user = await this.userService.findByEmail(email)

        const comparePassword = await compare(pass, user?.password)
        if(!comparePassword){
            throw new UnauthorizedException()
        }
        
        const payload = {
            sub:user.id,
            email: user.email
        }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

  
}
