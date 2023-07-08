import React from "react";
import st from "./BtnAni.module.css";

export default function BtnAni(props) {
  return (
    <div
      style={{
        marginLeft:`${props.mL}`
      }}
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
