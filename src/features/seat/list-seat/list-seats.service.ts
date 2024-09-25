import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Seat } from "src/domain/movie/seat.entity";
import { Movie } from "src/domain/movie/movie.entity";
import { SeatRepository } from "src/infrastructure/repositories/seat/seat.repository";
@Injectable()
export class ListAllSeatsHandler {
  constructor(
    @InjectRepository(SeatRepository)
    private seatRepository: SeatRepository,
  ) {}
  public async handle(
    movie_id: Movie,
  ): Promise<Seat[]> {
    try {
     const data=await this.seatRepository.findAllByUuid(movie_id);
     const seatPayload = {
      uuid: "0afd8a85-2865-4acd-9a60-b84f0751cc15",
      is_available:false
    }
    const abc= await this.seatRepository.updateSeatStatus(seatPayload)
    console.log("ended at", new Date())
    return data;
    } catch (error) {
      throw error;
    }
  }
}