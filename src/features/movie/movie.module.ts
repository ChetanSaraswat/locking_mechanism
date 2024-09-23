import { Module } from '@nestjs/common';
import { CreateMovieController } from './create-movie/create-movie.controller';
import { CreateMovieHandler } from './create-movie/create-movie.service';
import { MovieRepository } from 'src/infrastructure/repositories/movie/movie.repository';
import { TicketRepository } from 'src/infrastructure/repositories/ticket/ticket.repository';
@Module({
  controllers:[CreateMovieController ],
  imports: [],
  providers: [
    CreateMovieHandler,
    MovieRepository,
    TicketRepository],
  exports: [],
})
export class MovieModule {}
