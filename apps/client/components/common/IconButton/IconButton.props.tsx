import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import {
  HiBars3,
  HiXMark,
  HiMiniEllipsisHorizontal,
  HiTrash,
} from 'react-icons/hi2';

export const icons = {
  close: HiXMark,
  burger: HiBars3,
  more: HiMiniEllipsisHorizontal,
  delete: HiTrash,
};

export type ButtonIconTypes = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ButtonIconTypes;
}
