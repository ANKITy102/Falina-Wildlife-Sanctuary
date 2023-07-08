import React from 'react'
import st from "./TableAdmin.module.css";
import {useSelector} from "react-redux"
import { selectAdmins } from '../../redux/stats/statsSlice';
const TableAdmin = () => {
  const admins = useSelector(selectAdmins);
  console.log(admins)
  return (
    <table className={st.rwd_table}>
  <tr>
    <th>Sr. No</th>

    <th>Name</th>
    <th>Email Address</th>
  </tr>
  {admins.map((elem, index)=>{

  return <tr>
    <td data-th="Movie Title">{index+1}</td>
    <td data-th="Genre">{elem.firstName} {elem.secondName}</td>
    <td data-th="Year">{elem.email}</td>
  </tr>
  })}

</table>
  )
}

export default TableAdmin
