import { GenreType } from "src/domain/movie/enum/genre-type.enum";

export interface CreateMovie{
    name:string,
    genre_type:GenreType,
    total_seats:number,
    price: number
}