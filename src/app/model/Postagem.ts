import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem {
    public id: number
    public foto: string
    public titulo: string
    public texto: string
    public localDateTime: Date
    public usuario: User
    public tema: Tema
}