'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { useCreateShortLink } from '@client/api/hooks/useCreateShortUrl';
import { Section } from '@client/components/common/Section/Section';
import { Typography } from '@client/components/common/Typography';
import { TextInput } from './TextInput';
import { Result } from './Result';
import { Error } from '../../common/Error';

export const Hero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { getShortLink, shortLinkData, error, isLoading } =
    useCreateShortLink();

  const onSubmit = handleSubmit(data => {
    getShortLink({ original_link: data.url });
    reset();
  });

  return (
    <Section className="hero-overlay relative" variant="hero">
      <div className="container">
        <div className="grid gap-10 text-center">
          <Typography tag="h1">Short URL</Typography>

          <Typography
            tag="p"
            variant="subtitle"
            className="mx-auto max-w-lg text-zinc-50"
          >
            Make email-friendly links. Use on blogs, forums, social networks,
            instant messages, online publications or ad campaigns. Shorten and
            track it for business or educational projects.
          </Typography>

          <form
            className="mx-auto grid w-full grid-cols-[1fr] items-center gap-8 rounded bg-zinc-50 p-5 font-sans text-neutral-400 md:max-w-[704px] md:gap-x-[0] md:gap-y-[34px] md:p-8 xl:max-w-[1040px] xl:grid-cols-[1fr_156px] xl:gap-4"
            onSubmit={onSubmit}
          >
            <div className="relative">
              <TextInput
                type="url"
                id="url"
                name="url"
                title="Short your url"
                rules={{
                  required: {
                    value: true,
                    message: 'Url is required',
                  },
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                    message: 'Please enter a valid url',
                  },
                }}
                register={register}
              />
              {errors.url && (
                <span className="absolute -bottom-5 left-0.5 text-xs text-red-500">
                  {errors?.url.message?.toString()}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="link rounded bg-orange-550 px-7 py-3 text-base font-medium text-zinc-50 md:col-span-2 xl:col-span-1"
            >
              {isLoading ? 'Loading..' : 'Shorten'}
            </button>
          </form>

          {error && !shortLinkData && <Error />}

          {!isLoading && shortLinkData && (
            <Result
              short_link={shortLinkData.short_link}
              original_link={shortLinkData.original_link}
              id={shortLinkData.id}
            />
          )}
        </div>
      </div>
    </Section>
  );
};
