import React from 'react'
// import PropTypes from 'prop-types'
import st from "./Loader.module.css";
const Loader = () => {



    return (
        <div className={st.showbox}>
            <div className={st.loader}>
                <svg className={st.circular} viewBox="25 25 50 50">
                    <circle className={st.path} cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" ></circle>
                </svg>
            </div>
        </div>
    )

}

export default Loader
