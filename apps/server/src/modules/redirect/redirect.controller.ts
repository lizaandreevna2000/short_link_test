import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { RedirectService } from './redirect.service';
import { LinksService } from '../links/links.service';

@Controller('t')
export class RedirectController {
  constructor(
    private redirectService: RedirectService,
    private linksService: LinksService,
  ) {}

  @Get(':code_link')
  async redirect(
    @Res() res: Response,
    @Param('code_link')
    code_link: string,
  ) {
    const link = await this.redirectService.redirectToShortLink(code_link);
    if (link) {
      await this.linksService.updateLinkCount(link, code_link);
      return res.redirect(link?.original_link);
    }
  }
}
