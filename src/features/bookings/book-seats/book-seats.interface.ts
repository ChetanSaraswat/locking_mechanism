import { GenreType } from "src/domain/movie/enum/genre-type.enum";
import { Movie } from "src/domain/movie/movie.entity";
import { Seat } from "src/domain/movie/seat.entity";
import { User } from "src/domain/user/user.entity";

export interface BookingSeat{
     seat_id : Seat,
     movie_id : Movie,
     user_id:  User
}