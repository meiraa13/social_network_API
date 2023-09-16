import { ApiProperty } from "@nestjs/swagger"
import { IsString,  IsNotEmpty} from "class-validator"


export class CreatePostDto {

    @ApiProperty({
        default:"conteúdo do seu post"
    })
    @IsNotEmpty()
    @IsString()
    content: string


}
