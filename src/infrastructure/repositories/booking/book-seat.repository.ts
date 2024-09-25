import { Injectable } from "@nestjs/common";
import { Booking } from "src/domain/movie/booking.entity";
import { Movie } from "src/domain/movie/movie.entity";
import { BookingSeat } from "src/features/bookings/book-seats/book-seats.interface";
import { DataSource,  Repository } from "typeorm";
@Injectable()
export class BookSeatRepository extends Repository<Booking> {
    constructor(
      private dataSource: DataSource
    ) {
        super(Booking, dataSource.createEntityManager());
    }

    async createBooking(payload: BookingSeat,transaction=null){
      if(transaction) {
        return  await transaction.save(Booking,payload)
      }
      return await this.save(payload) 
    }
}