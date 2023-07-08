import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import st from "./Packages.module.css";
import Footer from "../../components/footer/Footer";
import { toast } from 'react-toastify';
import { registerUser, validateEmail } from '../../services/authServices'
import WhiteNavbar from "../../components/navbar/WhiteNavbar"
import { bookTickets } from "../../services/bookingServices";
// const Showmssg = ({message})=>{
//   return <ul className={st.errormssg}>{message}
//   </ul>
// }
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  package_tour: "",
  adults: "0",
  childs: "0",
  start_date: "",
  // end_date: "",
  no_of_rooms: "",
  // no_of_days: ""
}

const Packages = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [formData, setFormData] = useState(initialState);
  
  const navigate = useNavigate();
  const currentDate = new Date();
  const minStartDate = new Date();
  const fareAdult = {
    "Silver": 1500,
    "Gold":2500,
    "Diamond":4500
  }
  const fareChild ={
    "Silver": 700,
    "Gold":1100,
    "Diamond":2000
  }

  
  minStartDate.setDate(currentDate.getDate() + 1); // Set minimum start date to current date + 3 days

  const [endDate, setEndDate] = useState("");
  const [Nodays, setDays] = useState("");
  // const dispatch = useDispatch()
  const [yourFare, setYourFare] = useState(0);
  // const navigate=useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "start_date") {
      if (!formData.package_tour || formData.package_tour === "---Select Package---") {
        return toast.warn("Please select a package")
      }
    }
    if(name==="package_tour"){
      if (value === "Gold") {
        setDays("7");
        // console.log(incrementedDate)
      }
      else if (value === "Silver") {
        setDays("4");
        // console.log(incrementedDate)
      }
      else if (value === "Diamond") {
        setDays("8");
        // console.log(incrementedDate)
      }

      if(formData.start_date){
        let incrementedDate = new Date(formData.start_date);
        if (formData.package_tour === "Gold") {
          incrementedDate = new Date(incrementedDate.setDate(incrementedDate.getDate() + 7))
          
        }
        else if (formData.package_tour === "Silver") {
          incrementedDate = new Date(incrementedDate.setDate(incrementedDate.getDate() + 4))
         
        }
        else if (formData.package_tour === "Diamond") {
          incrementedDate = new Date(incrementedDate.setDate(incrementedDate.getDate() + 8))
          
        }
        const setThisDate=  incrementedDate.toISOString().split('T')[0]
   
        
        // setFormData({...formData, "end_date":setThisDate});
        setEndDate(setThisDate);
      }
    }


    // console.log(formData.start_date)
    if (name === "start_date") {
      const dateString = value;
      let incrementedDate = new Date(dateString);
      // console.log(incrementedDate)
      if (formData.package_tour === "Gold") {
        incrementedDate = new Date(incrementedDate.setDate(incrementedDate.getDate() + 7))
        // console.log(incrementedDate)
      }
      else if (formData.package_tour === "Silver") {
        incrementedDate = new Date(incrementedDate.setDate(incrementedDate.getDate() + 4))
        // console.log(incrementedDate)
      }
      else if (formData.package_tour === "Diamond") {
        incrementedDate = new Date(incrementedDate.setDate(incrementedDate.getDate() + 8))
        // console.log(incrementedDate)
      }
      const setThisDate=  incrementedDate.toISOString().split('T')[0]
      console.log(setThisDate)
      
      // setFormData({...formData, "end_date":setThisDate});
      setEndDate(setThisDate);
    }

      setFormData({...formData, [name]:value})
    
  }
  const submitHandler = async (e) => {

    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, package_tour, adults, childs, start_date, no_of_rooms } = formData;
    if (!firstName || !lastName || !email || !phoneNumber || !package_tour || !adults || !childs || !start_date  || !no_of_rooms) {
      return toast.error("All fields are required");
    }
    if (!lastName.match(/^(?! )\w{2,}$/) || !firstName.match(/^(?! )\w{2,}$/)) {
      return toast.error("Please give valid name");
    }
    if (!validateEmail(email)) {
      return toast.error("Please provide correct email.");
    }
    if (!phoneNumber.match(/^\d{10}$/)) {
      return toast.error("Please provide correct number")
    }
    if (!formData.package_tour || formData.package_tour === "---Select Package---") {
      return toast.warn("Please select a package")
    }
    if(!formData.adults.match(/^[0-5]$/) || !formData.childs.match(/^[0-5]$/)){
      return toast.warn("Adults and children cannot be more than 5.")
    }
    if(!formData.no_of_rooms.match(/^[1-4]$/) ){
      return toast.warn("Totals Rooms can only be 1 to 4.");
    }

    const noOfAdut = parseInt((formData.adults));
    console.log(noOfAdut)
    const noOfChild = parseInt((formData.childs));
    console.log(noOfChild)
    const key1 = formData.package_tour;
    const fare1 = fareChild[key1];
    const fare2 = fareAdult[key1];
    const TotalFare = noOfChild*fare1 +  noOfAdut*(fare2);

    const packageData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      package_tour: formData.package_tour,
      adults: formData.adults,
      childs: formData.childs,
      start_date: formData.start_date,
      end_date: endDate,
      no_of_rooms: formData.no_of_rooms,
      no_of_days: Nodays,
      fare:TotalFare
    }
    const response = await bookTickets(packageData);
    console.log(response);
    if(response.status=="Success"){
        navigate("/")
    }
    console.log(packageData);
    
  }
  const calcFare = ()=>{
    if (!formData.package_tour || formData.package_tour === "---Select Package---") {
      return toast.warn("Please select a package")
    }
    
    const key1 = formData.package_tour;
    const fare1 = fareChild[key1];
    const fare2 = fareAdult[key1];
    let noOfAdut = parseInt((formData.adults));
    if(formData.adults==null || formData.adults==""){
      noOfAdut=0;
    }
    let noOfChild = parseInt((formData.childs));
    if(formData.childs==null || formData.childs==""){
      noOfChild=0;
    }
    const TotalFare = noOfChild*fare1 +  noOfAdut*(fare2);
    setYourFare(TotalFare);
  }
  useEffect(()=>{
    if (!formData.package_tour || formData.package_tour === "---Select Package---") {
      // return toast.warn("Please select a package")
    }
   
    else{
      calcFare();
    }
  },[formData.adults, formData.childs])
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
            <hr className={st.linepckg} /><br></br>
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
            <hr className={st.linepckg} /><br></br>
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
            <hr className={st.dlinepckg} /><br></br>
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
                <input type="text" className={st.inputbox_fname} name="firstName" value={formData.firstName} onChange={(e) => { onChangeHandler(e) }}></input>
                <div className={st.label_lname}>Last Name</div>
                <input type="text" className={st.inputbox_lname} name="lastName" value={formData.lastName} onChange={(e) => { onChangeHandler(e) }}></input>
              </div>
              <div className={st.email}>Email Address *</div>
              <input type="text" className={st.inputbox} name="email" value={formData.email} onChange={(e) => { onChangeHandler(e) }}></input>
              <div className={st.email}>Phone Number *</div>
              <input type="tel" className={st.inputbox} name="phoneNumber" value={formData.phoneNumber} onChange={(e) => { onChangeHandler(e) }}></input>
              <div className={st.label_adult}>Package *</div>
              <select className={st.inputbox_pck} name="package_tour" value={formData.package_tour} onChange={(e) => { onChangeHandler(e) }}>
                <option className={st.pack}>---Select Package---</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Diamond">Diamond</option>
              </select>
              <div className={st.nameinputs}>
                <div className={st.label_adult}>Adults *</div>
                <input type="text" className={st.inputbox_adult} name="adults" value={formData.adults} onChange={(e) => { onChangeHandler(e) }}></input>
                <div className={st.label_child}>Children *</div>
                <input type="text" className={st.inputbox_child} name="childs" value={formData.childs} onChange={(e) => { onChangeHandler(e) }}></input>
              </div>
              <div className={st.nameinputs}>
                <div className={st.label_adult}>Start *</div>
                <input type="date" className={st.inputbox_adult} name="start_date" min={minStartDate.toISOString().split('T')[0]} value={formData.start_date} onChange={(e) => { onChangeHandler(e) }}></input>
                <div className={st.label_child}>End *</div>
                <input type="date" className={st.inputbox_child} disabled name="end_date" min={formData.start_date} value={endDate} onChange={(e) => { onChangeHandler(e) }}></input>
              </div>
              <div className={st.nameinputs}>
                <div className={st.label_adult}>Number Of Rooms *</div>
                <select className={st.inputbox_rooms} name="no_of_rooms" value={formData.no_of_rooms} onChange={(e) => { onChangeHandler(e) }}>
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
                <input type="text" className={st.inputbox_child} name="no_of_days" disabled value={Nodays} onChange={(e) => { onChangeHandler(e) }}></input>
              </div>
              <button className={`btn btn-dark ${st.bttn2} my-7`} type="submit">Book Trip</button>
            </form>
          </div>
          <div className={st.calcfare}>
            <p>Calculate Fare</p>
            <h6>Enter the number of adult or children you will travel<br></br> with to find fare.</h6>
            <div className={st.calcinputs}>
              <div className={st.label_calcadult}>Adults</div>
              <input type="text" className={st.inputbox_calcadult} value={formData.adults} onChange={onChangeHandler} name="adults"></input>
              <div className={st.label_calcchild}>Childs</div>
              <input type="text" className={st.inputbox_calcchild} value={formData.childs} onChange={onChangeHandler} name="childs"></input>
            </div>
            <button type="submit" onClick={calcFare} className={`btn btn-light ${st.calcbttn}`}>Calculate</button>
            <br />
            <h1 className="text-3xl mx-auto"> Total Fare: <span className="text-amber-500">₹{yourFare}</span></h1>
          </div>
        </div>
        <hr className={st.line} />
      </div>

      <Footer />
    </>
  );
}

export default Packages