import React from 'react';

function Post() {
  return (
    <div className="mx-auto my-5 grid w-[300px] items-center">
      <img
        className="w-[300px] lg:w-[550px]"
        src="https://images.pexels.com/photos/910311/pexels-photo-910311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="post"
      />
      <div className=" flex w-full items-center justify-center space-x-10 bg-white py-3 text-gray-400 md:space-x-20">
        <div className="flex cursor-pointer items-center space-x-2 text-sm duration-300 hover:text-red-500 md:text-lg">
          <i className="fas fa-heart"></i>
          <h4>like</h4>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 text-sm duration-300 hover:text-blue-500">
          <i className="fas fa-comment"></i>
          <h4>comment</h4>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 duration-300 hover:text-yellow-500">
          <i className="fas fa-share"></i>
          <h4>share</h4>
        </div>
      </div>
    </div>
  );
}

export default Post;
