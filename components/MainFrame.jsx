import React from 'react';
import Image from 'next/image';

const MainFrame = () => {
  return (
    <div className="bg-lightGray w-full grid grid-cols-2 px-[100px]">
      <div className="text-giant break-words	">
        <p className="text-giant break-keep		">LET’S EXPLORE UNIQUE CLOTHES.</p>
      </div>
      <div>
        <Image width={871} height={784} className=" 	" src="/picture.png" alt="rrr" />
      </div>
    </div>
  );
};

export default MainFrame;
