import Head from 'next/head';
import React from 'react';

function signin() {
  return (
    <div className="grid items-center justify-center">
      <Head>
        <title>Signin | reddit</title>
      </Head>
      <img
        className="mx-auto w-[150px]"
        src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
        alt="logo"
      />
      <form className="grid items-center space-y-3">
        <input
          className="w-[200px] border-none bg-gray-100 py-2 pl-3 font-semibold"
          type="email"
          placeholder="email"
        />
        <input
          className="w-[200px] border-none bg-gray-100 py-2 pl-3 font-semibold"
          type="password"
          placeholder="password"
        />
        <button className="mx-auto w-max cursor-pointer border-none bg-blue-500 px-5 py-2 font-semibold text-white">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default signin;
