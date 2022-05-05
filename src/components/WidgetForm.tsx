import React from 'react';
import { CloseButton } from './CloseButton';

export const WidgetForm = () => {
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header className='flex'>
        <span className='text-xl leading-6'>Deixe seu comentário</span>{' '}
        <CloseButton />
      </header>
      <p>Hello World</p>
      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela{' '}
        <a
          href='https://rocketseat.com.br'
          className='underline underline-offset-2'>
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
