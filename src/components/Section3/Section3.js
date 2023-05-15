
import React from "react";
import "./Section3.css"
import Vedio from "../../Asstes/Images/Video.png"
export default class Section3 extends React.Component{
    
    render() {
        return(
            <>
            <div className="body-img">
              <img src={Vedio} alt="vedio" />
            </div>
            </>
        )
    }
}