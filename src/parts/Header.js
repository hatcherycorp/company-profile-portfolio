/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Fade from 'react-reveal/Fade';
import { Transition } from '@headlessui/react';

import Button from 'elements/Button';
import BrandIcon from 'parts/BrandIcon';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <header className="header">
      <Fade>
        <div className="flex justify-between px-4 lg:px-0">
          <BrandIcon />

          <button aria-label="Button" className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
          <li>
            <Button
              className="text-lg mx-auto ml-3 px-6 py-2 bg-theme-yellow text-white rounded-full border-2 border-theme-yellow hover:bg-dark-theme-yellow border-yellow-800 transition duration-200"
              type="link"
              href="/discuss-project"
            >
              Start Your Design
            </Button>
          </li>
        </ul>
      </Fade>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Fade>
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <li className="mx-auto my-9 bg-white">
              <Button
                className="mx-auto px-5 py-2 bg-theme-yellow text-white rounded-full border-2 border-theme-yellow hover:bg-dark-theme-yellow border-yellow-800 transition duration-200"
                type="link"
                href="/discuss-project"
              >
                Start Your Design
              </Button>
            </li>
          </ul>
        </Fade>
      </Transition>
    </header>
  );
}
