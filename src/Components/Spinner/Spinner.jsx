import React from 'react';
import loading from './spinner.gif';

export default function Spinner() {
  return (
    <div className='loader'>
      <img src={loading} alt="" />
    </div>
  )
}
