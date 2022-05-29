import React from 'react';

export default function Spinner() {
  const style = {
    width: '4rem',
    height: '4rem',
  };
  return (
    <div className='Spinner'>
      <div
        className='spinner-border text-secondary'
        style={style}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}
