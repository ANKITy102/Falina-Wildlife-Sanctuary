import './App.css';

function contactus (){
    return(
        <>
        <div className="container">
            <div className="nav">
                <div className="item item1">Home</div>
                <div className="item item2">Packages</div>
                <div className="item item3"></div>
                <div className="item item4">Gallery</div>
                <div className="item item5">About Us</div>
            </div>
            <div className="banner">
                <p>Contact Us</p>
            </div>
            <div className="main">
                <div className="touch">
                    <div className="text text1"><p><strong>Get in touch</strong></p></div>
                    <div className="text text2"><p><strong>Visit us</strong><br/>Come say hello toour office HQ.<br/>
                    <strong>Jungle Safari India, Lucknow-324005</strong>
                    </p></div>
                    <div className="text text3"><p><strong>Chat to us</strong><br/>Our friendly team is here to help.<br/>
                    <strong>falinawildlife69@gmail.com</strong>
                    </p></div>
                    <div className="text text4"><p><strong>Call us</strong><br/>Mon-Sat from 8am to 6pm<br/>
                    <strong>(+91)-8527518718</strong>
                    </p></div>
                    <div className="text text5"><p><strong>Social Media</strong></p></div>
                </div>
                <div className="form">
                    <form>
                        <div className="naam">
                        <div className="fname"><label>First Name</label></div>
                        <input className="name" type='text'/>
                        <div className="lname"><label>Last Name</label></div>
                        <input className="sname" type='text'/>
                        </div>
                        <div className="number"><label>Phone Number</label></div>
                        <input className="fields" type="number"/>
                        <div className="email"><label>Email</label></div>
                        <input className="fields" type="email"/>
                        <div className="query"><label>Your Query</label></div>
                        <input className="fields-query" type="text"/>
                        <div><button>Send Query</button></div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default contactus;