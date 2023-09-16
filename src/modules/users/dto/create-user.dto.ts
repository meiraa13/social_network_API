import { IsEmail, IsString, MinLength, MaxLength, IsNotEmpty} from "class-validator"
import { Transform } from "class-transformer"
import { hashSync } from "bcryptjs"
import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({
        default: "Usuário"
    })
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({
        default: "usuario@mail.com"
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty({
        default: "senhaSegura"
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @Transform(({value}:{value:string})=> hashSync(value, 8),{
        groups:['transform']
    })
    password: string

    @ApiProperty({
        default: "AAAA-MM-DD"
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    birthdate: string

    @ApiProperty({
        default:"sua descrição"
    })
    @IsNotEmpty()
    @IsString()
    bio: string
}
