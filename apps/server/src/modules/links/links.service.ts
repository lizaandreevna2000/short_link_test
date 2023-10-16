import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as shortid from 'shortid';
import { Link } from '@prisma/client';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { PrismaService } from '../../database/prisma.service';
import { preparePaginationParams } from 'apps/server/helpers/preparePaginationParams';

@Injectable()
export class LinksService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(page: number | string = 1, perPage: number | string = 5) {
    const params = preparePaginationParams(page, perPage);
    if (isNaN(params.pageAsNumber) || isNaN(params.perPageAsNumber)) {
      throw new BadRequestException('Invalid page or perPage values');
    }
    try {
      const count = await this.prismaService.link.count();

      const offset = (params.pageAsNumber - 1) * params.perPageAsNumber;
      const links = await this.prismaService.link.findMany({
        skip: offset,
        take: params.perPageAsNumber,
      });
      return {
        links,
        total: count,
      };
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async findLinkById(id: number): Promise<Link | null> {
    const link = await this.prismaService.link.findUnique({
      where: {
        id,
      },
    });

    try {
      if (!link) {
        throw new NotFoundException();
      }
      return link;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async createShortLink(): Promise<{ short_link: string; code: string }> {
    const code = shortid.generate();

    const baseUrl = process.env.BASE_URL;
    const shortLink: string = `${baseUrl}/t/${code}`;

    return {
      short_link: shortLink,
      code,
    };
  }

  async createLink(createLinkDto: CreateLinkDto) {
    const { original_link } = createLinkDto;

    const existing = await this.prismaService.link.findUnique({
      where: { original_link },
    });

    if (existing) {
      throw new ConflictException('link alredy exist');
    }

    try {
      const shortLink = await this.createShortLink();
      return await this.prismaService.link.create({
        data: {
          original_link,
          short_link: shortLink.short_link,
          code_link: shortLink.code,
        },
      });
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async deleteLink(id: number) {
    try {
      return await this.prismaService.link.delete({
        where: { id },
      });
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async updateLinkCount(data: UpdateLinkDto, code_link: string) {
    try {
      let { count_click } = data;
      count_click++;
      await this.prismaService.link.update({
        where: {
          code_link,
        },
        data: {
          count_click,
        },
      });
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
