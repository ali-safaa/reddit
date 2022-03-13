import Head from 'next/head';
import React from 'react';

function signup() {
  return (
    <div className="grid items-center justify-center">
      <Head>
        <title>Signup | reddit</title>
      </Head>
      <img
        className="mx-auto w-[150px]"
        src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
        alt="logo"
      />
      <form className="grid items-center space-y-3">
        <input
          className="w-[200px] border-none bg-gray-100 py-2 pl-3 font-semibold"
          type="text"
          placeholder="full name"
        />
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
        <input
          className="w-[200px] border-none bg-gray-100 py-2 pl-3 font-semibold"
          type="password"
          placeholder="repeat password"
        />
        <button className="mx-auto w-max cursor-pointer border-none bg-blue-500 px-5 py-2 font-semibold text-white">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default signup;
