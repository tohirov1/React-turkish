import React from "react";
import "./Section2.css"
import Icons from "../../Asstes/Images/icon.svg"
import Calendar from "../../Asstes/Images/calendar.svg"
import Clok from "../../Asstes/Images/clock.svg"
import Eye from "../../Asstes/Images/eye.svg"
import ImgIcon from "../../Asstes/Images/imgIcon.svg"
import Paul from  "../../Asstes/Images/paul.png"

export default class Section2 extends React.Component{

    render() {
        return(
            <>
            <section>
            <div className="site-section2">
            <div className="container">
                <h3 className="text-center mt-3">Testimony</h3>
                <span className="icon">
                <img src={Icons} alt="Icon" />
                </span>
                <h1 className="text-center">Happy customers</h1>
                <div className="row mt-5 mb-5">
                    <div className="col-md-4 mt-3">
                      <div className="bg-white p-4 rounded rounded-4">
                      <h3>Maria</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                        <div className="teim">
                            <img src={Calendar} alt="calendar" />
                            <span className="ms-1">06/02/2022</span>
                            <img className="ms-3" src={Clok} alt="clok" />
                            <span className="ms-1">11:15</span>
                            <img className="ms-3" src={Eye} alt="eye" />
                            <span className="ms-1">222</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="bg-white p-4 rounded rounded-4">
                      <h3>Maria</h3>
                      <p>Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...</p>
                        <div className="teim">
                            <img src={Calendar} alt="calendar" />
                            <span className="ms-1">06/02/2022</span>
                            <img className="ms-3" src={Clok} alt="clok" />
                            <span className="ms-1">11:15</span>
                            <img className="ms-3" src={Eye} alt="eye" />
                            <span className="ms-1">222</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="bg-white p-4 rounded rounded-4">
                      <h3>Maria</h3>
                      <p>Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...</p>
                        <div className="teim">
                            <img src={Calendar} alt="calendar" />
                            <span className="ms-1">06/02/2022</span>
                            <img className="ms-3" src={Clok} alt="clok" />
                            <span className="ms-1">11:15</span>
                            <img className="ms-3" src={Eye} alt="eye" />
                            <span className="ms-1">222</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="container">
            <div className="site-section3">
            <h3 className="text-center mt-5">News</h3>
                <span className="icon text-danger">
                <img className="text-danger" src={ImgIcon} alt="Icon" />
                </span>
                <h1 className="text-center text-danger"> Gerícht updates</h1>
                <div className="row mt-5 ms-2 boxrow">
                    <div className="col-12 col-md-4 col-lg-4 mt-3">
                        <div className="border rounded rounded-4">
                        <img className="paul w-100" src={Paul} alt="paul" />
                        <h2 className="mt-3 fs-3 ms-3 me-4 mb-2">Tips for prepping and caring for your grill</h2>
                        <p className="text mt-3 ms-3 me-4 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                        <div className="more">
                            <span className="text-danger fs-5 ms-3 me-4 mb-2">Read More</span>
                            <span className="me-5">Read More</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mt-3">
                        <div className="border rounded rounded-4" >
                        <img className="paul w-100" src={Paul} alt="paul" />
                        <h2 className="mt-3 fs-3 ms-3 me-4 mb-2">Tips for prepping and caring for your grill</h2>
                        <p className="text mt-3 ms-3 me-4 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                        <div className="more">
                            <span className="text-danger fs-5 ms-3 me-4 mb-2">Read More</span>
                            <span className="me-5">Read More</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mt-3 ">
                       <div className="border rounded rounded-4">
                       <img className="paul w-100 " src={Paul} alt="paul" />
                        <h2 className="mt-3 fs-3 ms-3 me-4 mb-2">Tips for prepping and caring for your grill</h2>
                        <p className="text mt-3 ms-3 me-4 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                        <div className="more">
                            <span className="text-danger fs-5 ms-3 me-4 mb-2">Read More</span>
                            <span className="me-5">Read More</span>
                        </div>
                       </div>
                    </div>
                    <div className="text-center mt-5">
                    <button className=" allbtn1 text-center">View More</button>
                    </div>
                </div>
            </div>
            </div>
            </section>
            </>
        )
    }
}