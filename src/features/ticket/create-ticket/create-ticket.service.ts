import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTicket } from "./create-ticket.interface";
import { Seat } from "src/domain/movie/seat.entity";
import { TicketRepository } from "src/infrastructure/repositories/ticket/ticket.repository";


@Injectable()
export class CreateTicketHandler {
  constructor(
    @InjectRepository(TicketRepository)
    private ticketRepository: TicketRepository,
  ) {}
  public async handle(
    ticketPayload: CreateTicket,
  ): Promise<Seat> {
    try {
      return await this.ticketRepository.createTicket(ticketPayload);
    } catch (error) {
      throw error;
    }
  }
}