import { Module } from '@nestjs/common';
import { RedirectService } from './redirect.service';
import { RedirectController } from './redirect.controller';
import { LinksService } from '../links/links.service';
import { PrismaModule } from '../../database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RedirectService, LinksService],
  controllers: [RedirectController],
})
export class RedirectModule {}
