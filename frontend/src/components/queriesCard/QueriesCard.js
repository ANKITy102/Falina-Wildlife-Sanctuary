import React from 'react'

const QueriesCard = ({name, message,email}) => {
  return (
    <div className="w-[29%] h-fit px-3 mb-1 pb-3 flex items-center flex-col rounded-lg" style={{
      boxShadow:"0px 0px 10px black"
    }}> 
      <h1 className="text-3xl w-full text-blue-900 py-2 border-b-2 border-slate-400 mb-2 font-[500]">
        {name} <span className="text-xl font-normal text-orange-700">says</span> 
      <div className="text-sm text-gray-500">({email})</div>
      </h1>
      <div className="m-1 bg-sky-800 p-2 rounded-lg min-h-[100px] w-full  font-[500] text-white">

        {message} 
      </div>
      <button className="w-full flex items-center justify-center px bg-sky-800 px-3 text-white font-[500] rounded-lg  py-1"> <i class="fa-solid fa-reply text-orange-600 mr-3"></i> Reply</button>
    </div>
  )
}

export default QueriesCard
