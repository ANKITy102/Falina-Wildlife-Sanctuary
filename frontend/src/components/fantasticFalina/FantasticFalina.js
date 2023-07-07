import React, { useEffect, useRef, useState } from 'react'
import st from "./FantasticFalina.module.css"
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai"
const FantasticFalina = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const [activeCard, setActiveCard] = useState(1);
    useEffect(() => {
        // console.log('hi')
        ref1.current.style.left = "20vw";
        ref1.current.style.scale = "1";
        ref1.current.style.transform = "rotateY(" + 0 + "deg)";

        ref2.current.style.left = "80.7vw";
        ref2.current.style.scale = "1";
        ref2.current.style.transform = "rotateY(" + 45 + "deg)";


        ref3.current.style.left = "115vw";
        ref3.current.style.scale = "0.92";
        ref3.current.style.transform = "rotateY(" + 60 + "deg)";
    }, [])
    const forwordMove = () => {
        if (activeCard === 1) {
            ref2.current.style.left = "20vw";
            ref2.current.style.scale = "1";
            ref2.current.style.transform = "rotateY(" + 0 + "deg)";
            ref1.current.style.left = "-22vw";
            ref1.current.style.scale = "0.96";
            ref1.current.style.transform = "rotateY(" + 45 + "deg)";
            ref3.current.style.left = "80.7vw";
            ref3.current.style.scale = "0.96";
            ref3.current.style.transform = "rotateY(" + -45 + "deg)";
            setActiveCard(2);
        }
        else if (activeCard === 2) {
            ref3.current.style.left = "20vw";
            ref3.current.style.scale = "1";
            ref3.current.style.transform = "rotateY(" + 0 + "deg)";
            ref1.current.style.left = "-45vw";
            ref1.current.style.scale = "0.92";
            ref1.current.style.transform = "rotateY(" + -60 + "deg)";
            ref2.current.style.left = "-22vw";
            ref2.current.style.scale = "0.96";
            ref2.current.style.transform = "rotateY(" + -45 + "deg)";
            setActiveCard(3);
        }
        else if (activeCard === 3) {

        }
    }
    const moveBackward =()=>{
        if(activeCard===1){

        }
        else if(activeCard===2){
            ref1.current.style.left = "20vw";
            ref1.current.style.scale = "1";
            ref1.current.style.transform = "rotateY(" + 0 + "deg)";
    
            ref2.current.style.left = "80.7vw";
            ref2.current.style.scale = "1";
            ref2.current.style.transform = "rotateY(" + 45 + "deg)";
    
    
            ref3.current.style.left = "115vw";
            ref3.current.style.scale = "0.92";
            ref3.current.style.transform = "rotateY(" + 60 + "deg)";
            setActiveCard(1)
        }
        else if(activeCard===3){
            ref2.current.style.left = "20vw";
            ref2.current.style.scale = "1";
            ref2.current.style.transform = "rotateY(" + 0 + "deg)";
            ref1.current.style.left = "-22vw";
            ref1.current.style.scale = "0.96";
            ref1.current.style.transform = "rotateY(" + 45 + "deg)";
            ref3.current.style.left = "80.7vw";
            ref3.current.style.scale = "0.96";
            ref3.current.style.transform = "rotateY(" + -45 + "deg)";
            setActiveCard(2);
        }
    }
    return (
        // <div className="w-full h-[105vh] pt-20 max-h-[750px] flex flex-col items-center justify-center" >
        <div className="w-full h-[105vh] pt-20  flex flex-col items-center justify-center" >
            <h1 className="text-7xl text-center font-semibold"><span className={`${st.qouteStyle}`}>"</span> Fantastic Falina </h1>


            <div className={`${st.slidingCardCont} w-full p-6 justify-center items-center flex  h-3/4 mt-12 `}>

                <div className={`flex h-[95%] w-3/5 ${st.slidingCard1}`} ref={ref1}>
                    <div className={`w-1/3 h-full ${st.image1}`}></div>
                    <div className={`w-2/3 flex flex-col px-9 pb-16 gap-5 justify-end h-full `}>
                        <div className="text-2xl font-bold">Tigers of Falina</div>
                        <div className="cardContent text-sm text-gray-500">Tigers of

                            Falina is also one of the oldest Tiger reserves in the country. It has been ever expanding and in 1991, a buffer zone was added and post  that, it became one of the largest wildlife sanctuaries in India. Due to the healthy population of the wild today, Falina is one of the best-preserved parks with 164 numbers of tigers and over 600 elephants.</div>
                    </div>
                </div>
                <div className={`flex h-[95%] w-3/5 ${st.slidingCard1}`} ref={ref2}>
                    <div className={`w-1/3 h-full ${st.image2}`}></div>
                    <div className={`w-2/3 flex flex-col px-9 pb-16 gap-5 justify-end h-full `}>
                        <div className="text-2xl font-bold">History of Falina</div>
                        <div className="cardContent text-sm text-gray-500">

                        History of Falina It was named as Hailey National Park when founded way back in 1936. William Malcom Hailey was the governor of the united province and it was after him that it was named. In the decade of the 50's, it was known as Ramganga. Later the name was changed to Falina Wildlife Sanctuary.</div>
                    </div>
                </div>
                <div className={`flex h-[95%] w-3/5 ${st.slidingCard1}`} ref={ref3}>
                    <div className={`w-1/3 h-full ${st.image3}`}></div>
                    <div className={`w-2/3 flex flex-col px-9 pb-16 gap-5 justify-end h-full `}>
                        <div className="text-2xl font-bold">Fauna of Falina</div>
                        <div className="cardContent text-sm text-gray-500">


Falina Wildilife Sanctuary is an ideal home for many majestic animals like the Royal Bengal Tiger, Asiatic Elephant and many other wild animals. Some of the other known mammal species residing in Falina include Asiatic Black Bear, Hog Deer, Walking Deer, Sambhar, Sloth Beer, Yellow-throated marten, etc. </div>
                    </div>
                </div>

            </div>
            <div className="flex w-3/5 mt-3 justify-between">
                <div className="text-4xl hover:cursor-pointer" ><AiFillLeftCircle onClick={moveBackward} /></div>
                <div className="text-4xl hover:cursor-pointer" on><AiFillRightCircle onClick={forwordMove} /></div>
            </div>
        </div>
    )
}

export default FantasticFalina
