import React from 'react'
import { useState } from 'react';


function IconsPopup({icon, text}) {

    const [isHovering, setIsHovering] = useState(false);

return(

    <>
        <img alt="" src={icon} onMouseEnter={() => setIsHovering(true)} onMouseLeave = {() => setIsHovering(false)}/>
        <p className={isHovering ? '' : "hidden"}>{text}</p>
    </>
)

}



export default IconsPopup