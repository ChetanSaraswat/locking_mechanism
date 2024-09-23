import { Injectable } from "@nestjs/common";
import { Movie } from "src/domain/movie/movie.entity";
import { CreateMovie } from "src/features/movie/create-movie/create-movie.interface";
import { DataSource,  Repository } from "typeorm";
@Injectable()
export class MovieRepository extends Repository<Movie> {
    constructor(
      private dataSource: DataSource
    ) {
        super(Movie, dataSource.createEntityManager());
    }

    async createMovie(payload: CreateMovie,transaction=null):Promise<Movie> {
      if(transaction) {
        return  await transaction.save(Movie,payload)
      }
      return await this.save(payload) 
    }
}