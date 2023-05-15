import React from "react";
import "./Section1.css"
import KliparSvg from "../../Asstes/Images/klipar.svg"
import Start from "../../Asstes/Images/Star.svg"
import Start1 from "../../Asstes/Images/Star1.svg"
import Piza from "../../Asstes/Images/piza.svg"
import Burger from "../../Asstes/Images/burger.svg"
import Xod from "../../Asstes/Images/xod.svg"
import Qiyma from "../../Asstes/Images/qiyma.svg"
import Shashlik from "../../Asstes/Images/shashlik.svg"
import Lavash1 from "../../Asstes/Images/lavash1.svg"
import Lavash from "../../Asstes/Images/lavash.svg"
import Kebak from "../../Asstes/Images/kebak.svg"
import Barber from "../../Asstes/Images/barber.svg"
import Jiz from "../../Asstes/Images/jiz.svg"
import KebakJiz from "../../Asstes/Images/kebakjiz.svg"
export default class Section1 extends React.Component{
    
    render() {
        return(
            <>
             <section>
                <div className="container">
                    <h2 className="text-danger fs-1 mt-5 popular">Popular Dishes</h2>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-3 col-md-6 text-center ">
                            <img src={KliparSvg} alt="kliparsvg"/>
                            <p className="text-center">Barbecue Shish kebab Shashlik Skewer</p>
                           <span className="">
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start1} alt="Start" />
                           </span>
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center ">
                            <img src={Piza} alt="Piza"/>
                            <p className="text-center">Barbecue Shish kebab Shashlik Skewer</p>
                           <span className="">
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start1} alt="Start" />
                           </span>
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <img src={Burger} alt="Burger"/>
                            <p className="text-center ">Barbecue Shish kebab Shashlik Skewer</p>
                           <span className="">
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start1} alt="Start" />
                           </span>
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 text-center">
                            <img src={Xod} alt="xod"/>
                            <p className="text-center">Barbecue Shish kebab Shashlik Skewer</p>
                           <span className="">
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start} alt="Start" />
                            <img src={Start1} alt="Start" />
                           </span>
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className="text-danger mt-5 Our">Our Regular Menu Pack</h1>
                    <div className="box-btn">
                         <button className="bg-danger allbtn">All</button>
                         <button className=" allbtn1">Shawarma</button>
                         <button className=" allbtn1">Turk Kebab</button>
                         <button className=" allbtn2">Hamburger Kebab</button>
                         <button className=" allbtn1">Doner kebab</button>
                         <button className=" allbtn1">Shish kebab</button>
                         <button className=" allbtn2">French fries Pizza</button>
                         <button className=" allbtn3">Desserts</button>
                    </div>
                    <div className="row mt-5 ">
                        <div className="col-12 col-lg-3 col-md-6 text-center ">
                            <img src={Qiyma} alt="qiyma"/>
                            <p className="text-center">Barbecue Shish kebab Shashlik <br/> Skewer</p>
                         
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center ">
                            <img src={Shashlik} alt="Shashlik"/>
                            <p className="text-center">Barbecue Shish kebab Shashlik <br /> Skewer</p>
                           
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <img src={Lavash1} alt="Lavash"/>
                            <p className="text-center ">Barbecue Shish kebab Shashlik <br /> Skewer</p>
                          
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 text-center">
                            <img src={Lavash} alt="Lavash"/>
                            <p className="text-center ">Barbecue Shish kebab Shashlik <br /> Skewer</p>
                          
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                    </div>
                    <div className="row mt-5 ">
                        <div className="col-12 col-lg-3 col-md-6 text-center ">
                            <img src={Piza} alt="piza"/>
                            <p className="text-center">Barbecue Shish kebab Shashlik <br/> Skewer</p>
                         
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center ">
                            <img src={Kebak} alt="Keabak"/>
                            <p className="text-center">Barbecue Shish kebab Shashlik <br /> Skewer</p>
                           
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <img src={Barber} alt="barber"/>
                            <p className="text-center ">Barbecue Shish kebab Shashlik <br /> Skewer</p>
                          
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 text-center">
                            <img src={Burger} alt="Burger"/>
                            <p className="text-center ">Barbecue Shish kebab Shashlik <br /> Skewer</p>
                          
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                    </div>
                    <div className="row mt-5 ">
                        <div className="col-12 col-lg-3 col-md-6 text-center ">
                            <img src={Jiz} alt="jiz"/>
                            <p className="text-center">Barbecue Shish kebab Shashlik <br/> Skewer</p>
                         
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center ">
                            <img src={KebakJiz} alt="Keabak"/>
                            <p className="text-center">Barbecue Shish kebab Shashlik <br /> Skewer</p>
                           
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <img src={Xod} alt="Xod"/>
                            <p className="text-center ">Barbecue Shish kebab Shashlik <br /> Skewer</p>
                          
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 text-center">
                            <img src={Lavash} alt="Lavash"/>
                            <p className="text-center ">Barbecue Shish kebab Shashlik <br /> Skewer</p>
                          
                           <p className="text-danger fs-4">$12.00</p>
                        </div>
                    </div>
                </div>
             </section>
            </>
        )
    }
}