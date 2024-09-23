import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { GenreType } from "src/domain/movie/enum/genre-type.enum";
export class CreateMovieCommand {
    
    @IsString()
    @IsNotEmpty()
    name:string

    @IsNumber()
    @IsNotEmpty()
    total_seats: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsEnum(GenreType)
    genre_type: GenreType;
  }