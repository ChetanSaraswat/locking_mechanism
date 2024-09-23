import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateMovie } from "./create-movie.interface";
import { Movie } from "src/domain/movie/movie.entity";
import { MovieRepository } from "src/infrastructure/repositories/movie/movie.repository";
import { dataSource } from "ormconfig";
import { TicketRepository } from "src/infrastructure/repositories/ticket/ticket.repository";


@Injectable()
export class CreateMovieHandler {
  constructor(
    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository,
    @InjectRepository(TicketRepository)
    private ticketRepository: TicketRepository,
  ) {}
  public async handle(
    moviePayload: CreateMovie,
  ): Promise<Movie> {
    try {
      let movie:Movie;
    await dataSource.transaction(async transaction => {
      movie = await this.movieRepository.createMovie(moviePayload,transaction);
      const total_seats:number = movie?.total_seats;
      for(let i:number=0 ;i < total_seats;i++){
        await this.ticketRepository.createTicket({movie_id: movie} ,transaction)
      }
      })
      return movie;
    } catch (error) {
      throw error;
    }
  }
}