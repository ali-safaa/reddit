import Link from 'next/link';
import React from 'react';
function Header() {
  return (
    <div className="flex w-full items-center justify-between bg-white py-5 shadow-md">
      <img
        className="ml-5 hidden w-[100px] md:inline-flex"
        src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
        alt="logo-web"
      />
      <img
        className="ml-5 inline-flex w-[35px] md:hidden"
        src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?width=640&crop=smart&auto=webp&s=bfd318557bf2a5b3602367c9c4d9cd84d917ccd5"
        alt="logo-mobile"
      />
      <div className="mx-3 flex h-[35px] w-[200px] items-center bg-gray-100 pl-3 hover:border-solid hover:border-blue-500 hover:bg-white md:w-[500px]">
        <i className="fas fa-search"></i>
        <input
          className="placeholder:text-md border-none bg-transparent pl-3 outline-none"
          type="text"
          placeholder="search reddit"
        />
      </div>
      <div className="flex items-center">
        <div className="mr-5 hidden items-center space-x-6 lg:inline-flex">
          <Link href={'/signin'}>
            <h3 className="cursor-pointer rounded-full border-solid border-blue-500 py-1 px-5 font-light hover:bg-blue-50">
              sign in
            </h3>
          </Link>
          <Link href={'/signup'}>
            <h3 className="cursor-pointer rounded-full bg-blue-500 py-1 px-5 font-light text-white hover:bg-blue-400">
              sign up
            </h3>
          </Link>
        </div>
        <div className="cursor-pointer space-x-3 px-3 hover:border-solid hover:border-gray-300">
          <i className="fas fa-user"></i>
          <i className="fas fa-arrow-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
