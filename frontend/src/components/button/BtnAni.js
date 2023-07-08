import React from "react";
import st from "./BtnAni.module.css";
import { useNavigate } from "react-router-dom";

export default function BtnAni(props) {
  const navigate = useNavigate();
  const navigateTo=()=>{
    navigate("/packages");  }
  return (
    <div
      style={{
        marginLeft:`${props.mL}`
      }}
      onClick={navigateTo}
    >
      <button
        className={`${st.btn_ani} `}
        style={{
          scale: `${props.scale}`,
        }}
      >
        <div className={`${st.btn_ani_value}`}>{props.value}</div>
      </button>
    </div>
  );
}
