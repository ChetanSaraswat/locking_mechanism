import { Module } from '@nestjs/common';
import { CreateMovieController } from './create-movie/create-movie.controller';
import { CreateMovieHandler } from './create-movie/create-movie.service';
import { MovieRepository } from 'src/infrastructure/repositories/movie/movie.repository';
import { SeatRepository } from 'src/infrastructure/repositories/seat/seat.repository';

@Module({
  controllers:[CreateMovieController ],
  imports: [],
  providers: [
    CreateMovieHandler,
    MovieRepository,
    SeatRepository],
  exports: [],
})
export class MovieModule {}
