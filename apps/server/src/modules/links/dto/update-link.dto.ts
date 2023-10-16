import { IsNumber } from 'class-validator';

export class UpdateLinkDto {
  @IsNumber()
  count_click: number;
}
