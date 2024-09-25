import { Injectable } from "@nestjs/common";
import { dataSource } from "ormconfig";
import { Movie } from "src/domain/movie/movie.entity";
import { Seat } from "src/domain/movie/seat.entity";
import { CreateSeat } from "src/features/seat/create-seat/create-seat.interface";
import { updateSeatPayload } from "src/features/seat/update-seat/update-seat.interface";
import { EntityManager,  Repository } from "typeorm";
@Injectable()
export class SeatRepository extends Repository<Seat> {
    constructor(
    ) {
        super(Seat, dataSource.createEntityManager());
    }
    async createSeat(payload: CreateSeat,transaction=null):Promise<Seat> {
      if(transaction) {
        return  await transaction.save(Seat,payload)
      }
      return await this.save(payload) 
    }

    async findByUuid(uuid: string, transaction?: EntityManager): Promise<Seat> {
    const queryBuilder = transaction 
    ? transaction.createQueryBuilder(Seat, 'seat')
    : this.createQueryBuilder('seat'); 

      return await queryBuilder
        .setLock('pessimistic_write')
        // .setLock("optimistic" , new Date('2024-09-25 15:01:11.426598'))
        .where('seat.uuid = :uuid', { uuid })
        .andWhere('seat.is_available = :isAvailable', { isAvailable: true }) 
        .innerJoinAndSelect('seat.movie_id', 'movie') 
        .getOne();
    }

    async updateSeatStatus(payload:updateSeatPayload , transaction = null){
      const { uuid, is_available } = payload;
      if (transaction) {
        return await transaction.update(Seat, { uuid: uuid }, { is_available });
      }    
      return await this.update( { uuid } , { is_available });
    }

    async findAllByUuid(movie_id: Movie): Promise<Seat[]> {
      // return await this.find({ where: { movie_id:movie_id } });
    return await this
    .createQueryBuilder('seat')
    .where('seat.movie_id = :movie_id', { movie_id : movie_id })
    .getMany();
    }
}