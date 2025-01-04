import React from "react";
import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <RotatingLines
        strokeColor="#00BFFF"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </div>
  );
};

export default Loader;
