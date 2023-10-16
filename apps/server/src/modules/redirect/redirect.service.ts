import { Injectable, BadRequestException } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RedirectService {
  constructor(private readonly prismaService: PrismaService) {}

  async redirectToShortLink(code_link: string) {
    try {
      const current_link = await this.prismaService.link.findUnique({
        where: { code_link },
      });
      if (current_link) {
        return current_link;
      }
    } catch {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'Server error',
      });
    }
  }
}
