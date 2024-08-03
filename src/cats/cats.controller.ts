import { Body, Controller, Delete, ForbiddenException, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Redirect, Res, UseFilters, UsePipes } from "@nestjs/common";
import { CreateCatDto, createCatSchema } from "./dto/create-cat.dto";
import { ListAllEntities } from "./dto/list-all-entites.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";
import { HttpExceptionFilter } from "src/exceptions/http-exception.filter";
import { ZodValidationPipe } from "src/pipes/validation.pipe";

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return this.catsService.findAll();
  }

  @Get()
  // @UseFilters(HttpExceptionFilter)
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(
      @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
      id: number): Promise<Cat | {}> {
    return this.catsService.findOne(id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}