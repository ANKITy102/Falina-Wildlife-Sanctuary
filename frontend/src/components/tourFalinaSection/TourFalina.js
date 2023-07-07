import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import st from "./TourFalina.module.css";
const TourFalina = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [activeCard, setActiveCard] = useState(1);

  useEffect(()=>{
    // ref1.current.style.left="0%"
    ref1.current.style.opacity="1";

    // ref2.current.style.left = "100%";
    ref2.current.style.opacity="0";

    // ref3.current.style.left = "200%";
    ref3.current.style.opacity="0";

},[])

  const navigateLeft = ()=>{
    if(activeCard===1){
      // ref1.current.style.left = "-100%";
      // ref2.current.style.left="0%";
      // ref3.current.style.left="100%";
      // setActiveCard(2)
    ref1.current.style.opacity="0";
    ref2.current.style.opacity="0";
    ref3.current.style.opacity="1";
    setActiveCard(3);
    }
    else if(activeCard===2){
      // ref2.current.style.left = "100%";
      // ref3.current.style.left="200%";
      // ref1.current.style.left="0%";
      ref1.current.style.opacity="1";
      ref2.current.style.opacity="0";
      ref3.current.style.opacity="0";
      setActiveCard(1);
    }
    else if(activeCard===3){
      // ref3.current.style.left = "100%";
      // ref1.current.style.left="-100%";
      // ref2.current.style.left="0%";
      ref1.current.style.opacity="0";
      ref2.current.style.opacity="1";
      ref3.current.style.opacity="0";
      setActiveCard(2);
    }
  }
  const navigateRight = ()=>{
    if(activeCard===1){
      // ref1.current.style.left = "-100%";
      // ref2.current.style.left="0%";
      // ref3.current.style.left="100%";
      ref1.current.style.opacity="0";
      ref2.current.style.opacity="2";
      ref3.current.style.opacity="0";
      setActiveCard(2)
    }
    else if(activeCard===2){
      // ref2.current.style.left = "-100%";
      // ref3.current.style.left="0%";
      // ref1.current.style.left="-200%";
      ref1.current.style.opacity="0";
      ref2.current.style.opacity="0";
      ref3.current.style.opacity="1";
      setActiveCard(3);
    }
    else if(activeCard===3){
      // ref3.current.style.left = "-100%";
      // ref1.current.style.left="0%";
      // ref2.current.style.left="100%";
      ref1.current.style.opacity="1";
      ref2.current.style.opacity="0";
      ref3.current.style.opacity="0";
      setActiveCard(1)
    }
  }
  return (
    // <div className={`h-[120vh]  w-full pt-7 flex flex-col max-h-[856px] items-center ${st.tourMainCont}`} >
    <div className={`h-[120vh]  w-full pt-7 flex flex-col  items-center ${st.tourMainCont}`} >
      <div className="text-8xl text-center font-bold">Tour of Falina</div>

      <div className={`${st.tourCard} movingCar h-[86%] flex flex-col items-center  w-full pt-5 `} ref={ref1}>
        <div className={` ${st.image_1} w-3/4 h-[55%] `}></div>
        <div className="w-3/4 flex justify-between">
            <div className="number text-8xl pt-2 text-gray-500 font-bold">01</div>
        <div className=" flex flex-col w-2/3 pt-4">
            <div className=" text-5xl font-bold">Falina Fun Tour</div>
            <div className="text-gray-500 pt-3">If the mystery and the excitement of an authentic wildlife tour is part of your travel itinerary, then look no further than a Fun Tour to Corbett National Park. Sprawl over 600 square kilometers, Corbett takes you to an amazing world full of wildlife, birding sanctuaries and nature preserves.</div>
            <div className="bookButton flex items-center hover:cursor-pointer gap-3 text-3xl font-bold pt-6">
                Book Now <BsArrowRight/>
            </div>
        </div>
            <div className="navingation flex text-4xl gap-5 pt-4">
                <div className='border-2 h-fit border-black rounded-full p-2 hover:cursor-pointer' onClick={navigateLeft}><BsArrowLeft /></div>
               <div className='border-2 h-fit border-black rounded-full p-2 hover:cursor-pointer' onClick={navigateRight}> <BsArrowRight /></div></div>
        </div>
      </div>
      <div className={`${st.tourCard} movingCar h-[86%] flex flex-col items-center  w-full pt-5 `} ref={ref2}>
        <div className={` ${st.image_2} w-3/4 h-[55%] `}></div>
        <div className="w-3/4 flex justify-between">
            <div className="number text-8xl pt-2 text-gray-500 font-bold">02</div>
        <div className=" flex flex-col w-2/3 pt-4">
            <div className=" text-5xl font-bold">Falina Tiger Tour</div>
            <div className="text-gray-500 pt-3">We are often fond of watching tigers on Discovery Channels at our home with a cup of tea. But have you ever thought of confronting the aggressive tigers in deep and deep jungles? The thought may scare many of us. But for some, it gives them maximum excitement to sight a tiger roaming near them.</div>
            <div className="bookButton flex items-center hover:cursor-pointer gap-3 text-3xl font-bold pt-6">
                Book Now <BsArrowRight/>
            </div>
        </div>
            <div className="navingation flex text-4xl gap-5 pt-4">
                <div className='border-2 h-fit border-black rounded-full p-2 hover:cursor-pointer' onClick={navigateLeft}><BsArrowLeft /></div>
               <div className='border-2 h-fit border-black rounded-full p-2 hover:cursor-pointer' onClick={navigateRight}> <BsArrowRight /></div></div>
        </div>
      </div>
      <div className={`${st.tourCard} movingCar h-[86%] flex flex-col items-center  w-full pt-5 `} ref={ref3}>
        <div className={` ${st.image_3} w-3/4 h-[55%] `}></div>
        <div className="w-3/4 flex justify-between">
            <div className="number text-8xl pt-2 text-gray-500 font-bold">03</div>
        <div className=" flex flex-col w-2/3 pt-4">
            <div className=" text-5xl font-bold">Falina Lake Tour</div>
            <div className="text-gray-500 pt-3">Located at a height of 1,938 meters (6,358 feet) above sea level, Falina Lake is among the center of tourist attractions in Uttarakhand. This Lake is popular among nature lovers that is why tourists from different nooks and corners of the globe visit the place.</div>
            <div className="bookButton flex items-center hover:cursor-pointer gap-3 text-3xl font-bold pt-6">
                Book Now <BsArrowRight/>
            </div>
        </div>
            <div className="navingation flex text-4xl gap-5 pt-4">
                <div className='border-2 h-fit border-black rounded-full p-2 hover:cursor-pointer' onClick={navigateLeft}><BsArrowLeft /></div>
               <div className='border-2 h-fit border-black rounded-full p-2 hover:cursor-pointer' onClick={navigateRight}> <BsArrowRight /></div></div>
        </div>
      </div>

    </div>
  )
}

export default TourFalina
