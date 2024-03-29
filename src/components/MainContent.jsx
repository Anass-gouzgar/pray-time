import React from "react";
import Prayer from "./Prayer";

const MainContent = () => {
  return (
    <div className="flex flex-col w-full">
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
      <div className="border border-b-4 border-blue-700" />
      {/* prayers cards */}
      <Prayer />
    </div>
  );
};

export default MainContent;
