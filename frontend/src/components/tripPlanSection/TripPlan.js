import React, { useEffect, useRef, useState } from 'react';
import st from "./TripPlan.module.css";
import {BsArrowRight,BsArrowLeft} from "react-icons/bs";

import BtnAni from '../button/BtnAni';


const TripPlan = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const [activeCard, setActiveCard]= useState(1);
    useEffect(()=>{
        ref1.current.style.left="0%"
        ref1.current.style.opacity="1";

        ref2.current.style.left = "35%";
        ref2.current.style.opacity="1";

        ref3.current.style.left = "70%";
        ref3.current.style.opacity="1";

        ref4.current.style.left = "105%";
        ref4.current.style.opacity="1";

        // useInterval(()=>{

        // },3500)

    },[])
    
    const navigateLeft=()=>{
        ref1.current.style.opacity="1";
        ref2.current.style.opacity="1";
        ref3.current.style.opacity="1";
        ref4.current.style.opacity="1";
        if(activeCard===1){
            setTimeout(()=>{
                ref1.current.style.left="105%";

            },400)
           
            ref1.current.style.opacity="0"
            ref2.current.style.left="0%";
            ref3.current.style.left="35%";
            ref4.current.style.left="70%";

            setActiveCard(2);

        }
        else if(activeCard===2){
            setTimeout(()=>{
                ref2.current.style.left="105%";

            },400)
           
            ref2.current.style.opacity="0"

            ref3.current.style.left="0%";
            ref4.current.style.left="35%";
            ref1.current.style.left="70%";
            setActiveCard(3);
        }
        else if(activeCard===3){
            setTimeout(()=>{
                ref3.current.style.left="105%";

            },400)
           
            ref3.current.style.opacity="0"
            ref4.current.style.left="0%";
            ref1.current.style.left="35%";
            ref2.current.style.left="70%";
            setActiveCard(4);
        }
        else if(activeCard===4){
           
            setTimeout(()=>{
                ref4.current.style.left="105%";
            },400)
            ref4.current.style.opacity="0"
            ref1.current.style.left="0%"
    
            ref2.current.style.left = "35%";
    
            ref3.current.style.left = "70%";
    
            setActiveCard(1);
        }
        
    }
    const navigateRight=()=>{
        ref1.current.style.opacity="1";
        ref2.current.style.opacity="1";
        ref3.current.style.opacity="1";
        ref4.current.style.opacity="1";
        if(activeCard===1){
            ref4.current.style.transition="none"
            ref4.current.style.left = "-35%";
            setTimeout(()=>{
                ref4.current.style.transition = "opacity 0.4s ease-out ,left 0.7s ease-in-out";
                ref4.current.style.left="0%";
                ref1.current.style.left="35%";
                ref2.current.style.left="70%";
                ref3.current.style.left="105%";
            },10)
            setActiveCard(4);

        }
        else if(activeCard===2){
            ref1.current.style.transition="none"
            ref1.current.style.left = "-35%";
            setTimeout(()=>{
                ref1.current.style.transition = "opacity 0.4s ease-out ,left 0.7s ease-in-out";
                ref1.current.style.left="0%";
                ref2.current.style.left="35%";
                ref3.current.style.left="70%";
                ref4.current.style.left="105%";
            },10)
            setActiveCard(1);
        }
        else if(activeCard===3){
            ref2.current.style.transition="none"
            ref2.current.style.left = "-35%";
            setTimeout(()=>{
                ref2.current.style.transition = "opacity 0.4s ease-out ,left 0.7s ease-in-out";
                ref2.current.style.left="0%";
                ref3.current.style.left="35%";
                ref4.current.style.left="70%";
                ref1.current.style.left="105%";
            },10)
            setActiveCard(2);
        }
        else if(activeCard===4){
            ref3.current.style.transition="none"
            ref3.current.style.left = "-35%";
            setTimeout(()=>{
                ref3.current.style.transition = "opacity 0.4s ease-out ,left 0.7s ease-in-out";
                ref3.current.style.left="0%";
                ref4.current.style.left="35%";
                ref1.current.style.left="70%";
                ref2.current.style.left="105%";
            },10)
            setActiveCard(3);
        }
    }
    return (
        <div className="h-[105vh] mt-4 flex flex-col mb-5  pt-14 justify-between">
        {/* <div className="h-screen mt-4 flex flex-col 0 pt-14 justify-between max-h-[714px]"> */}
            <h1 className="text-8xl font-bold text-center">Trip Plan</h1>
            <div className="flex h-3/4  pb-5" >
                <div className="h-full flex flex-col  w-2/5 pl-32 py-4">
                    <div className="text-4xl font-bold w-4/5 leading-[1.3]">Browse More
                        Trip Types and Interests</div>
                    <div className=" w-[90%] mt-10 text-gray-400 text-lg">Get in contact with us to start planning
                        your own adventure.</div>
                    <div className="flex w-5/12 justify-between text-4xl mt-36">
                        <div className="border-black p-2 rounded-full border-2 hover:cursor-pointer" onClick={navigateLeft}><BsArrowLeft/></div>
                        <div className="border-black p-2 rounded-full border-2 hover:cursor-pointer" onClick={navigateRight}><BsArrowRight/></div>
                    </div>
                </div>
                <div className={`flex h-full pt-3 w-3/5  ${st.movingCardParentDiv}`}>
                    <div className={`h-[95%] ${st.transition} ${st.movingCard} ${st.image1}`} ref={ref1}> <div className={st.movingCardContent}>Jeep Safari <br/> Booking<BtnAni value="Book Now" scale="0.65" mL="-2rem"/></div> </div>
                    <div className={`h-[95%] ${st.transition}  ${st.movingCard} ${st.image2}`} ref={ref2}> <div className={st.movingCardContent}>Night Safari <br/> Booking<BtnAni value="Book Now" scale="0.65" mL="-2rem"/></div> </div>
                    <div className={`h-[95%] ${st.transition}  ${st.movingCard} ${st.image3}`} ref={ref3}> <div className={st.movingCardContent}>Falina Resort <br/> Booking<BtnAni value="Book Now" scale="0.65" mL="-2rem"/></div> </div>
                    <div className={`h-[95%] ${st.transition}  ${st.movingCard} ${st.image4}`} ref={ref4}> <div className={st.movingCardContent}>Falina Package <br/> Booking<BtnAni value="Book Now" scale="0.65" mL="-2rem"/></div> </div>
                </div>
            </div>
        </div>
    )
}

export default TripPlan
