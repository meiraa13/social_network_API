import { IsString,  IsNotEmpty} from "class-validator"
import { User } from "src/modules/users/entities/user.entity"

export class CreatePostDto {

    @IsNotEmpty()
    @IsString()
    content: string


}
