import React from 'react';
import Image from 'next/image';
import logo from '../public/fashion.svg';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { logout, currentUser } = useAuth();
  async function f() {
    const displayName = currentUser.displayName;
    console.log(displayName);
    const email = currentUser.email;
    const photoURL = currentUser.photoURL;
    const emailVerified = currentUser.emailVerified;
  }

  const loginHandler = () => {
    logout();
  };

  return (
    <div>
      <div className="flex justify-between   items-center   px-[100px]   ">
        <div>
          <Image className=" 	" objectFit="contain" src={logo} alt="rrr" />
        </div>
        <ul className="text-22   flex mr-1 items-center gap-[65px]   	 ">
          <li className=" align-middle ">CATALOGUE</li>
          <li className=" align-middle ">FASHION</li>
          <li className=" align-middle ">FAVOURITE</li>
          <li className=" align-middle ">LIFESTYLE</li>
          <li
            onClick={loginHandler}
            className=" cursor-pointer  align-middle bg-black text-white p-3 rounded-[7px]">
            {currentUser ? 'Log out' : 'SIGN IN'}
          </li>
        </ul>
        {!currentUser ? 'User has not been logged in ' : currentUser}
      </div>
    </div>
  );
};

export default Header;
