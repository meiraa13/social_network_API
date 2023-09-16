import { Exclude } from "class-transformer"

export class User {
    readonly id: number
    name: string
    email: string

    @Exclude()
    password: string
    birthdate: string
    bio: string
    readonly created_at: Date

}
