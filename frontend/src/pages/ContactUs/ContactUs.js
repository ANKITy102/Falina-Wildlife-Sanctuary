import React from 'react'
import sks from './ContactUs.module.css';
import st from '../packageshotel/Packages.module.css'
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.svg";
import Footer from '../../components/footer/Footer';

function contactus (){
    return(
        <>
        <div className={sks.container}>
            <nav className={st.navbar}>
            <div className={st.navLinks1}>
                <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </div>
                <div className={st.logo}>
                    <img src={logo} alt="logo" />
                    
                </div>
            <div className={st.navLinks2}>
                <ul>
                <li><Link to="/packages">Packages</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </div>
            </nav>
            <div className={sks.banner}>
                <p>Contact Us</p>
            </div>
            <div className={sks.main}>
                <div className={sks.touch}>
                    <div className={sks.text}><p><strong>Get in touch</strong></p></div>
                    <div className={sks.text}><p><strong>Visit us</strong><br/>Come say hello toour office HQ.<br/>
                    <strong>Jungle Safari India, Lucknow-324005</strong>
                    </p></div>
                    <div className={sks.text}><p><strong>Chat to us</strong><br/>Our friendly team is here to help.<br/>
                    <strong>falinawildlife69@gmail.com</strong>
                    </p></div>
                    <div className={sks.text}><p><strong>Call us</strong><br/>Mon-Sat from 8am to 6pm<br/>
                    <strong>(+91)-8527518718</strong>
                    </p></div>
                    <div className={sks.text}><p><strong>Social Media</strong></p></div>
                </div>
                <div className={sks.form}>
                    <form>
                        <div className={sks.naam}>
                        <div className={sks.fname}><label>First Name</label></div>
                        <input className={sks.name} type='text'/>
                        <div className={sks.lname}><label>Last Name</label></div>
                        <input className={sks.sname} type='text'/>
                        </div>
                        <div className={sks.number}><label>Phone Number</label></div>
                        <input className={sks.fields} type="tel"/>
                        <div className={sks.email}><label>Email</label></div>
                        <input className={sks.fields} type="email"/>
                        <div className={sks.query}><label>Your Query</label></div>
                        <input className={sks.fieldsquery} type="text"/>
                        <div><button className={sks.button}>Send Query</button></div>
                    </form>
                </div>
            </div>
            <hr className={st.line}/>
        </div>
        <Footer className="my-13"/>
        </>
    );
}

export default contactus;