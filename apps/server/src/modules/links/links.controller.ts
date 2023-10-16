import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
  Query,
} from '@nestjs/common';
import { Link } from '@prisma/client';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';

@Controller('links')
export class LinksController {
  constructor(private linksService: LinksService) {}

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 5,
  ) {
    return await this.linksService.findAll(page, perPage);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Link | null> {
    return await this.linksService.findLinkById(id);
  }

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto) {
    return await this.linksService.createLink(createLinkDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Link> {
    return await this.linksService.deleteLink(id);
  }
}
