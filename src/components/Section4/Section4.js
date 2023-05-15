
import React from "react";
import "./Section4.css"
import ImgIcon from "../../Asstes/Images/imgIcon.svg"
import Michel from "../../Asstes/Images/mich.png"
import Instagram from "../../Asstes/Images/insta.png"
import Tuxum from "../../Asstes/Images/tuxum.png"
import Kofe from "../../Asstes/Images/piyola.png"
export default class Section4 extends React.Component{


    render() {
        return(
            <>
            <section className="site-section4">
            
                <div className="wrappper pt-5 pb-5">
                <div className="ms-3">
            <h3 className=" mt-5 text-black insta">Instagram</h3>
                <span className=" text-danger">
                <img className="text-danger" src={ImgIcon} alt="Icon" />
                </span>
                <h1 className=" text-black photo"> Photo Gallery</h1>
                <p className="textra">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                  <div className="all-btn">
                <button className=" allbtn1 text-center section-btn">View More</button>
                  </div>
                </div>
                    <div className="wrapper-img ">
                        <img className="michel" src={Michel} alt="Michel" />
                        <img className="instagram" src={Instagram} alt="Instagram" />
                        <img className="tuxum" src={Tuxum} alt="Tuxum" />
                        <div className="bacround">

                        </div>
                    </div>
                </div>
              
            </section>
            </>
        )
    }
}