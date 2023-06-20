import React from "react";
import { Link } from "react-router-dom";
// import HeroSection from "../heroSection/HeroSection";
import logo from "../../assets/images/logo.svg";
import st from "./Packages.module.css";
import Footer from "../footer/Footer";


export default function Packages() {
  return (
    <>
    <div className={st.container}>
      <nav className={st.navbar}>
        <div className={st.navLinks1}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </div>
              <div className={st.logo}>
                  <img src={logo} alt="logo" />
                  
              </div>
        <div className={st.navLinks2}>
            <ul>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
            </ul>
        </div>
      </nav>
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
            <div className={st.text1}>Our most wanted trip</div><br></br>
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
      <div className={st.fare}></div>
      <hr className={st.line}/>
      </div>
      
      <Footer />
    </>
  );
}
