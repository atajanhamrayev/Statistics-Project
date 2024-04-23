import React from "react";
import { Spin } from "antd";

const Preloader = () => {
  return (
    <div className="w-[99%] h-[100px] flex p-3 mx-3 items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

export default Preloader;
