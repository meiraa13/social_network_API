import { IsEmail, IsString, MinLength, MaxLength, IsNotEmpty} from "class-validator"
import { Transform } from "class-transformer"
import { hashSync } from "bcryptjs"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @Transform(({value}:{value:string})=> hashSync(value, 8),{
        groups:['transform']
    })
    password: string

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    birthdate: string

    @IsNotEmpty()
    @IsString()
    bio: string
}
