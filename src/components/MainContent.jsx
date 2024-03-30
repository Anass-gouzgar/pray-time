import React from "react";
import Prayer from "./Prayer";
import img from "../assets/dhhr-prayer-mosque.png";


const MainContent = () => {
  return (
    <div className="flex flex-col w-full mt-6 font-ar">
      {/* first row */}
      <div className="flex justify-around bg-slate-100 w-full">
        <div>
          <h2> الصلاة</h2>
          <h1>مدينة</h1>
        </div>

        <div>
          <h2> motabaqi hata salat</h2>
          <h1>1:23:34</h1>
        </div>
      </div>
      {/* divider */}
      <div className="border border-b-4 border-blue-700 m-4" />
      {/* prayers cards */}
      <div className="bg-bklack flex gap-4 justify-center flex-wrap mb-9 ">
        <Prayer salat="الفجر" time="05:12" img={img} className="bg-white text-9xl" />
        {/* <Prayer salat="الشروق" time="06:45" /> */}
        <Prayer salat="الظهر" time="12:30" img={img} />
        <Prayer salat="العصر" time="15:45" img={img} />
        <Prayer salat="المغرب" time="18:30" img={img} />
        <Prayer salat="العشاء" time="20:45" img={img} />
      </div>
      {/* select country */}

      <form className="max-w-sm mx-auto ">
        <select
          id="countries"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected>المدينة</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </form>
    </div>
  );
};

export default MainContent;
