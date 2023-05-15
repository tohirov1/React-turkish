import React from "react"
import { useState } from "react";
import LogoSvg from "../../Asstes/Images/logo.svg"
import "./Header.css"

    export default function Header(){
        const [dark, setColor] = useState(false);
        const darkcolor = () =>{
              setColor(!dark)
        }
        return(
            <>
            <header className="site-header">
                <div className="container">
            <div className="header-logo">
            <div>
            <img src={LogoSvg} alt="Logo"/>
                </div>  
                <u className="logo-list">
                <div className={`${dark ? 'dark' : 'body'}` } style={{marginRight: "20px"}}>              
          {
            dark ? <i onClick={darkcolor} class="fa-solid fa-sun"></i> : <i onClick={darkcolor} class="fa-solid fa-moon"></i>
          }
        </div>
                    <li className="logo-item"><a className="link" href="">Menu</a></li>
                    <li className="logo-item"><a className="link" href="">News</a></li>
                    <li className="logo-item"><a className="link" href="">About Us</a></li>
                    <li className="logo-item"><a className="link" href="">Contact Us</a></li>
                    <button className="logo-btn">Log in</button>
                </u>
            </div>
                                  
                </div>
            </header>
            </>
        )
    }
