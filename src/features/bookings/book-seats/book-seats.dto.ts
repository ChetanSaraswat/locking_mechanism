import {  IsNotEmpty } from "class-validator";
import { Movie } from "src/domain/movie/movie.entity";
import { Seat } from "src/domain/movie/seat.entity";
import { User } from "src/domain/user/user.entity";
export class CreateBookSeatCommand {
    
    @IsNotEmpty()
    user_id : User

    @IsNotEmpty()
    movie_id : Movie;

    @IsNotEmpty()
    seat_id : Seat;

  }