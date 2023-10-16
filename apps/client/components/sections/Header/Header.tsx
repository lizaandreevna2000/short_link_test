'use client';

import React, { FC } from 'react';

import { Logo } from '../../common/Logo';

import header from '../../../data/header.json';
import { NavLink } from './NavLink';

export const Header: FC = () => {
  return (
    <header
      className="z-10 w-full border-b border-neutral-400 bg-cyan-750 py-4 md:py-6"
      role="banner"
    >
      <div className="container relative flex items-center justify-between">
        <div className="relative">
          <Logo />
        </div>

        <nav role="navigation">
          <ul className="flex items-center gap-[60px]">
            {header.menu.map(({ id, name, url }) => (
              <li key={id}>
                <NavLink
                  className="link text-lg text-white"
                  url={url}
                  name={name}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* <div className="flex items-center gap-8">
      

          <IconButton icon="burger" onClick={navbarToggleHandler} />

          <MobileMenu show={navbarOpen} onClose={navbarToggleHandler} /> 
        </div> */}
      </div>
    </header>
  );
};
