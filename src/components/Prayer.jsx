import React from 'react'

const Prayer = ({salat, time, img}) => {
  return (
    <div className="flex flex-col gap-6 max-w-44 h-64 border  rounded-lg shadow bg-gray-800 border-gray-700">
      <div>
        <img
          className="rounded-t-lg w-full h-24 object-cover"
            src={img}
          alt="prayer img"
        />
      </div>

      <div className="p-2">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-white">
          {salat}
        </h5>
        <p className=" text-5xl text-center text-white font-bold ">{time}</p>
      </div>
    </div>
  );
}

export default Prayer