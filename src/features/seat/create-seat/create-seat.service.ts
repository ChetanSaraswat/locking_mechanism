import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSeat } from "./create-seat.interface";
import { Seat } from "src/domain/movie/seat.entity";
import { SeatRepository } from "src/infrastructure/repositories/seat/seat.repository";

@Injectable()
export class CreateSeatHandler {
  constructor(
    @InjectRepository(SeatRepository)
    private seatRepository: SeatRepository,
  ) {}
  public async handle(
    seatPayload: CreateSeat,
  ): Promise<Seat> {
    try {
      return await this.seatRepository.createSeat(seatPayload);
    } catch (error) {
      throw error;
    }
  }
}