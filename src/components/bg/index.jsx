import React from "react";
import './bg.css'

const Bg = ({ children }) =>{
    return(
        <div className="bg">
            {children}
        </div>
    )
}

export default Bg