import React from 'react'
import st from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={st.container}>
      <div className={st.loading}>
  <div></div>
  <div></div>
  <div></div>
</div>
    </div>
  )
}

export default Loader
