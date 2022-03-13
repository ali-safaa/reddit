import React from 'react';

function Post() {
  return (
    <div className="mx-auto my-5 grid w-max items-center bg-white">
      <img
        className="w-[450px] lg:w-[550px]"
        src="https://images.pexels.com/photos/910311/pexels-photo-910311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="post"
      />
      <div className="my-3 ml-5 flex items-center space-x-5 text-lg text-gray-400">
        <div className="flex cursor-pointer items-center space-x-2">
          <h4>like</h4>
          <i className="fas fa-heart"></i>
        </div>
        <div className="flex cursor-pointer items-center space-x-2">
          <h4>comment</h4>
          <i className="fas fa-comment"></i>
        </div>
        <div className="flex cursor-pointer items-center space-x-2">
          <h4>share</h4>
          <i className="fas fa-share"></i>
        </div>
      </div>
    </div>
  );
}

export default Post;
