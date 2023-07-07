import React from 'react'

const Aboutus = () => {
  
  return (
    <div className="h-[118vh] flex flex-col items-center " >
      <div className="text-8xl text-center mt-14 mb-9 font-bold">About</div>
      <div className="flex flex-row w-full justify-center gap-5 h-4/5">
        <div className=" text-[230px] w-[12%] flex items-start font-normal"><div className="text-white image__1 w-full  h-[64%]  flex justify-center items-center">F</div></div>
        <div className=" text-[230px] flex items-center font-normal w-[12%]"><div className="text-white w-full image__2 h-[64%] flex justify-center items-center">A</div></div>
        <div className=" text-[230px] flex items-end font-normal w-[12%]"><div className="text-white w-full image__3  h-[64%] flex justify-center items-center">L</div></div>
        <div className=" text-[230px] flex items-end font-normal w-[12%]"><div className="text-white image__4 w-full h-[64%] flex justify-center items-center">I</div></div>
        <div className="text-[230px] flex items-center font-normal w-[12%]"><div className="text-white w-full image__5 h-[64%] flex justify-center items-center">N</div></div>
        <div className=" text-[230px] flex items-start font-normal w-[12%]"><div className="text-white w-full image__6 h-[64%] flex justify-center items-center">A</div></div>
      </div>
      <div className="w-3/5 text-center text-gray-500 text-sm p-10">Falina is a paradise for tourists, with breathtaking landscapes and natural wonders. This region is home to the varieties of Flora and Fauna. Falina offers a variety of adventure and leisure activites, including hiking, camping, safari and night gazing.</div>
    </div>
  )
}

export default Aboutus
