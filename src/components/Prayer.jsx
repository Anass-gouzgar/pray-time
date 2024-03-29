import React from 'react'
import img from "../assets/dhhr-prayer-mosque.png";

const Prayer = () => {
  return (
    <div className="flex flex-col gap-6 max-w-44 h-64 border  rounded-lg shadow bg-gray-800 border-gray-700">
      <div>
        <img
          className="rounded-t-lg w-full h-24 object-cover"
          src="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblJJRHdBYlhVUE1zYk1DelBEVXlBT01YZVhXZ3xBQ3Jtc0trMGtPLVpnUkpvTVo2M2V1ZWFsUUU3S3FsbTFtQzBwU1JUaGl5dVpYUzRPS0daT09mbUVpTUtfU3hXMXFDNnhMWnFVdWs3bmhlZXdCTGk3WjJXMXh0WHJQWmVEa0VOZ0ZNa0p2akFUUUhkZENvRkk0MA&q=https%3A%2F%2Fwepik.com%2Fapi%2Fimage%2Fai%2F9a07baa7-b49b-4f6b-99fb-2d2b908800c2&v=wikEEKvyPug"
          alt="prayer img"
        />
      </div>

      <div className="p-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          الفجر
        </h5>
        <p className="mb-3 font-normal text-white ">5:23</p>
      </div>
    </div>
  );
}

export default Prayer