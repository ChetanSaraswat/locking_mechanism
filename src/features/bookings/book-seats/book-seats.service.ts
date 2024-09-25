import { Injectable } from "@nestjs/common";
import { dataSource } from "ormconfig";

import { InjectRepository } from "@nestjs/typeorm";
import { BookingSeat } from "./book-seats.interface";
import { Booking } from "src/domain/movie/booking.entity";
import { BookSeatRepository } from "src/infrastructure/repositories/booking/book-seat.repository";
import { UnavailabeSeat } from "src/infrastructure/exception/custom-exception";
import { EntityManager } from "typeorm";
import { SeatRepository } from "src/infrastructure/repositories/seat/seat.repository";


@Injectable()
export class CreateBookingHandler {
  constructor(
    @InjectRepository(SeatRepository)
    private seatRepository: SeatRepository,
    @InjectRepository(BookSeatRepository)
    private bookSeatRepository: BookSeatRepository,
  ) {}

  // public async waitFor12Seconds(): Promise<void> {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 12000); // 12 seconds
  //   });
  // }

  public async handle(
    payload: BookingSeat,
  ): Promise<Booking> {
    try {
      const{movie_id , seat_id , user_id} = payload
      await dataSource.transaction( async (transaction: EntityManager) => {
      const seat = await this.seatRepository.findByUuid(payload?.seat_id.toString() ,transaction)
      const movie  = movie_id.toString();
      if(!seat){
        throw new UnavailabeSeat()
      }
      if( seat.is_available && (movie  === seat.movie_id.uuid)){  
        //  await this.waitFor12Seconds()
         await this.bookSeatRepository.createBooking(payload,transaction)
      }
      const seatPayload = {
        uuid: seat_id.toString(),
        is_available:false
      }
       await this.seatRepository.updateSeatStatus(seatPayload,transaction)
    })
      return ;
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  }
}