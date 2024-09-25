import { Body, Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
import { handleError } from "src/infrastructure/exception/custom-exception";
import { ListAllSeatsHandler } from "./list-seats.service";
import { ListSeatCommand } from "./list-seats.dto";

@Controller('/')
export class ListAllSeatsController {
  constructor(
     private readonly listAllSeatsHandler: ListAllSeatsHandler, 
  ) {}

  @Get('list-seats')
  public async handle(
    @Body() body:ListSeatCommand ,
    @Res() res: Response,
  ) {
    try {
        const movie_id = body.movie_id
      const response =await this.listAllSeatsHandler.handle(movie_id)
      return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      console.log('Error during creating user', error);
      return handleError(res, error);
    }
  }
}