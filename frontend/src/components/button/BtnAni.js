import React from 'react'
import st from './BtnAni.module.css'

export default function BtnAni(props) {
  return (
    <div>
      <button className={`${st.btn_ani}`}><div className={`${st.btn_ani_value}`}>{props.value}</div></button>
    </div>
  )
}
