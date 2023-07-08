import React from 'react';
import py from './paymnet.module.css';
import WhiteNavbar from "../../components/navbar/WhiteNavbar";

function Payment(){
  return(
    <>
    <div className={py.container}>
          {/* <div className={py.nav}>
              <div className={py.item}>Home</div>
              <div className={py.item}>Packages</div>
              <div className={py.item}></div>
              <div className={py.item}>Gallery</div>
              <div className={py.item}>About Us</div>
          </div> */}
          <WhiteNavbar/>
          <div className={py.banner}>
              <p>PAYMENT</p>
          </div>
          <div className={py.main}>
          <div className={py.title}>
            <div className={`${py.mtitle} ${py.mtitle1}`}>
              <p className={`${py.num} ${py.num1}`}>01</p>
              <p className={py.details}>PERSONAL DETAILS</p>
            </div>
            <div className={`${py.mtitle} ${py.mtitle2}`}>
            <p className={`${py.num} ${py.num2}`}>02</p>
            <p className={py.details}>ADDRESS DETAILS</p>
            </div>
            <div className={`${py.mtitle} ${py.mtitle3}`}>
            <p className={py.num}>03</p>
            <p className={py.details}>PACKAGE DETAILS</p>
            </div>
          </div>
          <div className={py.form}>
              <form>
              <div className={py.naam}>
                  <div className={py.name}><label>Name</label></div>
                  <input className={py.fname} type='text'/>
                  <div className={py.phone}><label>Phone</label></div>
                  <input className={py.number} type='text'/>
              </div>
              <div className={py.naam2}>
                  <div className={py.email}><label>Email</label></div>
                  <input className={py.mail} type='email'/>
              </div>
              <div className={py.naam}>
                  <div className={py.pin}><label>Pin Code</label></div>
                  <input className={py.code} type='text'/>
                  <div className={py.country}><label>Country</label></div>
                  <input className={py.desh} type='text'/>
              </div>
              <div className={py.naam2}>
                  <div className={py.add}><label>Address</label></div>
                  <input className={py.address} type='text'/>
              </div>
              <div className={py.naam}>
                  <div className={py.amt}><label>Amount</label></div>
                  <input className={py.paisa} type='number'/>
              </div>
              <div className={py.naam2}>
                  <div className={py.pack}><label>Package</label></div>
                  <input className={py.package} type='text'/>
              </div>
              </form> 
              <div className={py.button}>
              <button className={py.btn}>Proceed to Pay</button>
              <button className={py.btn} onClick={() => window.print()}>Print The Form</button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Payment;