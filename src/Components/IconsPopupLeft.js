import React from 'react'
import { useState } from 'react';


function IconsPopupLeft({icon, text}) {

    const [isHovering, setIsHovering] = useState(false);

return(

    <>
        <p className={isHovering ? '' : "hidden"}>{text}</p>
        <img alt="" src={icon} onMouseEnter={() => setIsHovering(true)} onMouseLeave = {() => setIsHovering(false)}/>
    </>
)

}



export default IconsPopupLeft