import React from "react";
import SectionSvg from "../../Asstes/Images/Section.svg"
import "./Section.css"
export default class Section extends React.Component{

    render() {
        return(
            <>
            <section className="site-section">
                <div className="container">
                     <div className="hero">
                        <div className="hero-left">
                        <h4 className="hero-top ">Chase the new Flavour</h4>
                        <h1 className="hero-title">The key to Fine dining</h1>
                        <p className="hero-text">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                         <button className="hero-btn">Explore Menu</button>
                        </div>
                        <div className="hero-right">
                            <img className="hero-img" src={SectionSvg} alt="hero-img" />
                        </div>
                     </div>
                </div>
            </section>
            </>
        )
    }
}