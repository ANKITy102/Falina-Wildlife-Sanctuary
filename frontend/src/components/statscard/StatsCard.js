import React from 'react'

const StatsCard = ({title, stats, active , logo, navig}) => {
  return (
    <div onClick={navig} className={` hover:cursor-pointer ${active?"bg-blue-900":"border-2 border-blue-900"} w-1/5 h-28 px-4 flex flex-col justify-evenly  py-3  rounded-xl`}>
      <div className={`${active?"text-slate-300":"text-blue-900"} flex items-center gap-3`}><i className={logo}></i> {title}</div>
      <div className={`${active?"text-white":"text-blue-900"} text-3xl`}>{stats}</div>
    </div>
  )
}

export default StatsCard
