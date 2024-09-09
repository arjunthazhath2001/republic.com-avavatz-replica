import React from 'react';

function Body() {
  return (
    <div className='grid grid-cols-12 gap-12 h-screen'>
      <div className='col-span-8 bg-blue-500'>Body col-1</div>
      <div className='col-span-4 bg-green-500'>Body col-2</div>
    </div>
  );
}

export default Body;
