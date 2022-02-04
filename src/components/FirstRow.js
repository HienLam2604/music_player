import React from 'react';
import Song from './Song'
function FirstRow() {
  return <>
    <div  className=' mt-3 fs-2 fw-bold'>
      by Apple Music
      </div>
      <div className='d-flex w-100 p-3'>
      <Song/>
      <Song/>
      <Song/>
      <Song/>
      <Song/>
      </div>
  </>;
}

export default FirstRow;
