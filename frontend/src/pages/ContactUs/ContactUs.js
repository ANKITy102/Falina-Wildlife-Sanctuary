import React, { useEffect, useState } from 'react'
import sks from './ContactUs.module.css';
import st from '../packageshotel/Packages.module.css'
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/images/logo.svg";
import Footer from '../../components/footer/Footer';
import WhiteNavbar from '../../components/navbar/WhiteNavbar';
import Navbar from '../../components/navbar/Navbar';
import { toast } from 'react-toastify';
import { saveQuery, validateEmail } from '../../services/authServices';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOADING, selectLoading } from '../../redux/auth/authSlice';
import Loader from '../../components/loader/Loader';

const initialState = {
    name: "",
    email: "",
    query: ""
}
const Contactus = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    const [formData, setFormData] = useState(initialState)
    const isLoading = useSelector(selectLoading);
    const dispatch =  useDispatch();
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const submitHandler =async (e) => {
        e.preventDefault();
        const { name, email, query } = formData;
        if (!name || !email || !query) {
            return toast.error("All fields are required.");
        }
        if (!name.match(/^(?! )\w{2,}$/)) {
            return toast.error("Please give valid name");
        }
        if (!validateEmail(email)) {
            return toast.error("Please give valid email.");
        }
        dispatch(SET_LOADING(true));

        const response = await saveQuery(formData);
        dispatch(SET_LOADING(false));
        if(response.status==='fail'){
            toast.error(response.message);
        }
        console.log(response);
        setFormData(initialState)
    }
    return (
        <>
            <div className={sks.container}>
                {isLoading && <Loader/>}
                <WhiteNavbar/>
                <div className={sks.banner}>
                    <p>Contact Us</p>
                </div>
                <div className={sks.main}>
                    <div className={sks.touch}>
                        <div className={sks.text}><p><strong>Get in touch</strong></p></div>
                        <div className={sks.text}><p><strong>Visit us</strong><br />Come say hello toour office HQ.<br /><br/>
                            <strong>Jungle Safari India, Lucknow-324005</strong>
                        </p></div><br></br>
                        <div className={sks.text}><p><strong>Chat to us</strong><br />Our friendly team is here to help.<br />
                            <strong>falinawildlife69@gmail.com</strong>
                        </p></div><br></br>
                        <div className={sks.text}><p><strong>Call us</strong><br />Mon-Sat from 8am to 6pm<br />
                            <strong>(+91)-8527518718</strong>
                        </p></div>
                        <div className={sks.text}><p><strong>Social Media</strong></p></div>
                    </div>
                    <div className={sks.form}>
                        <form onSubmit={submitHandler}>
                            <div className={sks.naam}>
                                <div className={sks.fname}><label>First Name</label></div>
                                <input className={sks.name} type='text' name='name' value={formData.name} onChange={changeHandler} />
                            </div>
                            <div className={sks.email}><label>Email</label></div>
                            <input className={sks.fields} type="email" name='email' value={formData.email} onChange={changeHandler} />
                            <div className={sks.query}><label>Your Query</label></div>
                            <textarea className={sks.fieldsquery} type="text" name='query' value={formData.query} onChange={changeHandler} />
                            <div><button className={sks.button} type="submit">Send Query</button></div>
                        </form>
                    </div>
                </div>
                <hr className={st.line} />
            </div>
            <Footer className="my-13" />
        </>
    );
}

export default Contactus;