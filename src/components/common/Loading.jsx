import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-25 h-25 border-4 border-blue-900 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
