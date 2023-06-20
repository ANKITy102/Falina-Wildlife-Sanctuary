import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const TourFalina = () => {
  return (
    <div className="h-[120vh] bg-red-500 w-full pt-7 flex flex-col items-center">
      <div className="text-8xl text-center font-bold">Tour of Falina</div>
      <div className="movingCar h-full flex flex-col items-center bg-yellow-200 w-full pt-5">
        <div className="imageContainer w-3/4 h-[55%] bg-slate-600"></div>
        <div className="w-3/4 flex justify-between">
            <div className="number text-8xl pt-2 text-gray-500 font-bold">01</div>
        <div className=" flex flex-col w-2/3 pt-4">
            <div className=" text-5xl font-bold">Falina Fun Tour</div>
            <div className="text-gray-500 pt-3">If the mystery and the excitement of an authentic wildlife tour is part of your travel itinerary, then look no further than a Fun Tour to Corbett National Park. Sprawl over 600 square kilometers, Corbett takes you to an amazing world full of wildlife, birding sanctuaries and nature preserves.</div>
            <div className="bookButton flex items-center gap-3 text-3xl font-bold pt-6">
                Book Now <BsArrowRight/>
            </div>
        </div>
            <div className="navingation flex text-4xl gap-5 pt-4">
                <div className='border-2 h-fit border-black rounded-full p-2'><BsArrowLeft/></div>
               <div className='border-2 h-fit border-black rounded-full p-2'> <BsArrowRight/></div></div>
        </div>
      </div>

    </div>
  )
}

export default TourFalina
