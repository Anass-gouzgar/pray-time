import React from "react";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div
      dir="rtl"
      className="flex flex-col justify-center items-center min-h-screen bg-slate-900"
    >
      <div className="flex flex-col items-center w-full h-1/2 rounded-md pb-4 ">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
