import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import News from '../components/News';
import Post from '../components/Post';
function index() {
  return (
    <div className=" bg-gray-300">
      <Head>
        <title>Home | reddit</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>
      <Header />
      <News />
      <div className="my-8">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default index;
