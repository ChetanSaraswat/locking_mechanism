import { Injectable } from "@nestjs/common";
import { Seat } from "src/domain/movie/seat.entity";
import { CreateTicket } from "src/features/ticket/create-ticket/create-ticket.interface";
import { DataSource,  Repository } from "typeorm";
@Injectable()
export class TicketRepository extends Repository<Seat> {
    constructor(
      private dataSource: DataSource
    ) {
        super(Seat, dataSource.createEntityManager());
    }

    async createTicket(payload: CreateTicket,transaction=null):Promise<Seat> {
      if(transaction) {
        return  await transaction.save(Seat,payload)
      }
      return await this.save(payload) 
    }

    async findByUuid(uuid: string, transaction = null): Promise<Seat> {
      const queryBuilder = this.createQueryBuilder('Seat')
        .where('Seat.uuid = :uuid', { uuid })
        .setLock('pessimistic_write');
    
      if (transaction) {
        queryBuilder.useTransaction(transaction);
      }
    
      return await queryBuilder.getOne();
    }
}