import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'
import logo_footer from "../../assets/images/logo_footer.png"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <div className='flex flex-row w-full px-[120px] pt-[120px] mb-[80px]'>
            <div className='flex flex-row gap-[60px] w-[60%]'>
                <img src={logo_footer} alt="footer_loogo" className='w-[150px] h-[150px] mt-[12px]'/>
                <div className='flex flex-col gap-y-[10px]'>
                    <h2 className='text-[40px] w-full font-extrabold'>Falina Wildlife Sanctuary</h2>
                    <p className='w-[370px] text-gray-500 text-sm font-light'>There are events in one's life which, no matter how remote, 
                        never fade from memory. 
                        So we welcome you to enjoy your journey here
                        at the Falina Wildlife Sanctuary.</p>
                    <div className='flex flex-row gap-8 mt-[20px]'>
                    <FaTwitter size={30}/>
                    <FaInstagram size={30}/>
                    <FaFacebook size={30}/>
                    </div>
                </div>
            </div>
            <div className='flex w-[40%] ml-[70px] pl-[140px] gap-[150px] mt-[10px]'>
                <div className='flex flex-col gap-[40px]'>
                    <h5 className='text-xl font-bold'>Feature</h5>
                    <ul className='flex flex-col gap-4 font-light text-gray-500'>
                        <Link to='/packages' className='no-underline'>Package</Link>
                        <Link to='/gallery' className='no-underline'>Gallery</Link>
                        <Link to='/contactus' className='no-underline'>Contact Us</Link>
                        <Link to='/aboutus' className='no-underline'>About Us</Link>
                    </ul>
                </div>
                <div className='flex flex-col gap-[40px]'>
                    <h5 className='text-xl font-bold'>Trip Plan</h5>
                    <ul className='flex flex-col gap-4 font-light text-gray-500'>
                        <Link to='/packages' className='no-underline'>Jeep Safari</Link>
                        <Link to='/packages' className='no-underline'>Resort Booking</Link>
                        <Link to='/packages' className='no-underline'>Night Safari</Link>
                        <Link to='/packages' className='no-underline'>Fun Tour</Link>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="h-px mt-5 mb-5 bg-gray-200 border-0 dark:bg-gray-500 mx-[100px]"></hr>
        <div className='flex flex-row justify-between mx-[100px] mb-[60px]'>
            <div>
                <p className='text-gray-500 font-light text-sm'>©2023 Falina Wildlife Sanctuary. All right reserved.</p>
            </div>
            <div className='flex flex-row gap-[80px] text-gray-500 text-sm font-light underline'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookies Settings</a>
            </div>
        </div>
    </>
  )
}

