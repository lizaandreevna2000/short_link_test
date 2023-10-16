'use client';

import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues, RegisterOptions } from 'react-hook-form';

interface ITextInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegister<FieldValues>;
  rules: RegisterOptions;
  name: string;
}

export const TextInput: FC<ITextInput> = ({
  register,
  rules,
  name,
  ...props
}) => {
  return (
    <input
      className="block w-full rounded border border-gray-300 p-3 text-sm outline-none"
      {...register(name, rules)}
      {...props}
    />
  );
};
