import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import st from "./Packages.module.css";
import Footer from "../../components/footer/Footer";
import { toast } from 'react-toastify';
import { registerUser, validateEmail } from '../../services/authServices'
import WhiteNavbar from "../../components/navbar/WhiteNavbar"
// const Showmssg = ({message})=>{
//   return <ul className={st.errormssg}>{message}
//   </ul>
// }
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber:"",
  package_tour:"",
  adults:"",
  childs:"",
  start_date:"",
  end_date:"",
  no_of_rooms:"",
  no_of_days:""
}

const Packages = () => {
  const [formData, setFormData] = useState(initialState);
  // const dispatch = useDispatch()
  // const navigate=useNavigate();
  const onChangeHandler = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData, [name]:value});
  }
  const submitHandler=async(e)=>{

    e.preventDefault();
    const {firstName,lastName,email,phoneNumber,package_tour, adults,childs,start_date,end_date,no_of_rooms,no_of_days} = formData;
    if(!firstName || !lastName || !email ||!phoneNumber|| !package_tour || !adults|| !childs|| !start_date|| !end_date|| !no_of_rooms|| !no_of_days){
      return toast.error("All fields are required");
    }
    if(!lastName.match(/^(?! )\w{2,}$/) || !firstName.match(/^(?! )\w{2,}$/)){
      return toast.error("Please give valid name");
    }
    if(!validateEmail(email)){
      return toast.error("Please provide correct email.");
    }
    if(!phoneNumber.match(/^\d{10}$/)){
      return toast.error("Please provide correct number")
    }
    console.log(formData);
    // const response = await registerUser(formData);
    // if(response.status==='fail'){
    //   return toast.error(response.message);
    // }
    // if(response.status==="Success"){
    //   const token  = response.data[0].token;
    //   console.log(token)
    //   localStorage.setItem("token", token);
    //   dispatch(SET_LOGIN(true))
    //   dispatch(SET_USER(response.data[0]));
    //   navigate('/')
    // }
    

  }
  return (
    <>
    <div className={st.container}>
      <WhiteNavbar/>
      <div className={st.plans}>
        <h1>Packages Plans</h1><br></br><br></br>
        <p>We have designed our plans to be affordable, flexible and tailored</p>
        <p>to your enjoyment and thrill.</p>
      </div>
      <div className={st.packages}>
        <div className={st.silver}>
            <div className={st.silverbkmrk}></div><br></br>
            <div className={st.text}>Silver</div>
            <div className={st.text1}>Best for short trip</div><br></br>
            <div className={st.box}>
                <div className={st.prc}>₹1500</div>
                <div className={st.textbox}>/Per Adult</div>
            </div>
            <div className={st.box}>
                <div className={st.prc}>₹700</div>
                <div className={st.textbox}>/Per Child</div>
            </div><br></br>
            <hr className={st.linepckg}/><br></br>
            <div className={st.text3}>Features</div><br></br>
            <div className={st.text4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;4 Days, 3 Nights</div>
            <div className={st.text4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Hotel Booked</div>
            <div className={st.text4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Fixed Menu</div>
            <button className={`btn btn-dark ${st.bttn} mx-10 my-11`}>Book Now</button>
            <Link to="/contactus" className={st.contact}>Contact Us</Link>
            </div>
        <div className={st.gold}>
        <div className={st.goldbkmrk}></div><br></br>
            <div className={st.text}>Gold</div>
            <div className={st.text1}>Most wanted trip</div><br></br>
            <div className={st.box}>
                <div className={st.prc}>₹2500</div>
                <div className={st.textbox}>/Per Adult</div>
            </div>
            <div className={st.box}>
                <div className={st.prc}>₹1100</div>
                <div className={st.textbox}>/Per Child</div>
            </div><br></br>
            <hr className={st.linepckg}/><br></br>
            <div className={st.text3}>Features</div><br></br>
            <div className={st.text4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;7 Days, 6 Nights</div>
            <div className={st.text4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Hotel Booked</div>
            <div className={st.text4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Dynamic Menu</div>
            <div className={st.text4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;24-hour Service</div>
            <div className={st.text4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Jeep Safari</div>
            <button className={`btn btn-dark ${st.bttn} mx-10 my-11`}>Book Now</button>
            <Link to="/contactus" className={st.contact}>Contact Us</Link>
        </div>
        <div className={st.diamond}>
        <div className={st.diamondbkmrk}></div><br></br>
            <div className={st.dtext}>Diamond</div>
            <div className={st.text1}>Most premium trip</div><br></br>
            <div className={st.box}>
                <div className={st.dprc}>₹4500</div>
                <div className={st.textbox}>/Per Adult</div>
            </div>
            <div className={st.box}>
                <div className={st.dprc}>₹2000</div>
                <div className={st.textbox}>/Per Child</div>
            </div><br></br>
            <hr className={st.dlinepckg}/><br></br>
            <div className={st.dtext3}>Features</div><br></br>
            <div className={st.dtext4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;8 Days, 7 Nights</div>
            <div className={st.dtext4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Hotel Booked</div>
            <div className={st.dtext4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Dynamic Menu</div>
            <div className={st.dtext4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;24-hour Service</div>
            <div className={st.dtext4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Jeep Safari</div>
            <div className={st.dtext4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Resort</div>
            <div className={st.dtext4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Night Safari</div>
            <div className={st.dtext4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Bonfire</div>
            <div className={st.dtext4}><i className="gg-check-o"></i>&ensp;&ensp;&ensp;Special Jam Night</div>
            <button className={`btn btn-light ${st.bttn} mx-10 my-11`}>Book Now</button>
            <Link to="/contactus" className={st.dcontact}>Contact Us</Link>
        </div>
      </div>
      <div className={st.fare}>
        <div className={st.form}>
        <p>Book Now</p><br></br><br></br>
          <form onSubmit={submitHandler}>
            {/* <Showmssg message={message}/> */}
            <div className={st.nameinputs}>
            <div className={st.label_fname}>First Name *</div>
            <input type="text" className={st.inputbox_fname} name="firstName" value={formData.firstName} onChange={(e)=>{onChangeHandler(e)}}></input>
            <div className={st.label_lname}>Last Name</div>
            <input type="text" className={st.inputbox_lname} name="lastName" value={formData.lastName} onChange={(e)=>{onChangeHandler(e)}}></input>
            </div>
            <div className={st.email}>Email Address *</div>
            <input type="text" className={st.inputbox} name="email" value={formData.email} onChange={(e)=>{onChangeHandler(e)}}></input>
            <div className={st.email}>Phone Number *</div>
            <input type="tel" className={st.inputbox} name="phoneNumber" value={formData.phoneNumber} onChange={(e)=>{onChangeHandler(e)}}></input>
            <div className={st.label_adult}>Package *</div>
            <select className={st.inputbox_pck} name="package_tour" value={formData.package_tour} onChange={(e)=>{onChangeHandler(e)}}>
              <option className={st.pack}>---Select Package---</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Diamond">Diamond</option>
            </select>
            <div className={st.nameinputs}>
            <div className={st.label_adult}>Adults *</div>
            <input type="text" className={st.inputbox_adult} name="adults" value={formData.adults} onChange={(e)=>{onChangeHandler(e)}}></input>
            <div className={st.label_child}>Children *</div>
            <input type="text" className={st.inputbox_child} name="childs" value={formData.childs} onChange={(e)=>{onChangeHandler(e)}}></input>
            </div>
            <div className={st.nameinputs}>
            <div className={st.label_adult}>Start *</div>
            <input type="date" className={st.inputbox_adult} name="start_date" value={formData.start_date} onChange={(e)=>{onChangeHandler(e)}}></input>
            <div className={st.label_child}>End *</div>
            <input type="date" className={st.inputbox_child} name="end_date" value={formData.end_date} onChange={(e)=>{onChangeHandler(e)}}></input>
            </div>
            <div className={st.nameinputs}>
            <div className={st.label_adult}>Number Of Rooms *</div>
            <select className={st.inputbox_rooms} name="no_of_rooms" value={formData.no_of_rooms} onChange={(e)=>{onChangeHandler(e)}}>
              <option className={st.rooms}>---No. of Rooms---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <div className={st.label_child}>Number of Days *</div>
            <input type="text" className={st.inputbox_child} name="no_of_days" value={formData.no_of_days} onChange={(e)=>{onChangeHandler(e)}}></input>
            </div>
          <button className={`btn btn-dark ${st.bttn2} my-7`} type="submit">Book Trip</button>
          </form>
        </div>  
        <div className={st.calcfare}>
          <p>Calculate Fare</p>
          <h6>Enter the number of adult or children you will travel<br></br> with to find fare.</h6>
          <div className={st.calcinputs}>
            <div className={st.label_calcadult}>Adults</div>
            <input type="text" className={st.inputbox_calcadult}></input>
            <div className={st.label_calcchild}>Childs</div>
            <input type="text" className={st.inputbox_calcchild}></input>
            </div>
            <button type="submit" className={`btn btn-light ${st.calcbttn}`}>Calculate</button>
        </div> 
      </div>
      <hr className={st.line}/>
      </div>
      
      <Footer />
    </>
  );
}

export default Packages