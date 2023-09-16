import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    UsersModule, 
    PassportModule,
    JwtModule.register({
      global:true,
      secret:process.env.SECRET_KEY,
      signOptions:{expiresIn:"2h"}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
