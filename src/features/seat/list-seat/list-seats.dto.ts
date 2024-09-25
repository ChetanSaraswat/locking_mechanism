import {  IsNotEmpty,  IsUUID } from "class-validator";
import { Movie } from "src/domain/movie/movie.entity";
export class ListSeatCommand {
    
    @IsUUID()
    @IsNotEmpty()
    movie_id:Movie;
  }