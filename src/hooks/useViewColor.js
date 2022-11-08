import { useState, useEffect } from "react";

export const useViewColor = () => {

    const [color, setColor] = useState("#F2E7D5");

    const handleResize = () => {
        handleColor();
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [color]);


    const handleColor = () => {

        let settingColor = color;
        if(window.innerWidth > 1000) settingColor = colors[0];
        else if(window.innerWidth > 700)  settingColor = colors[1];
        else settingColor = colors[2];

        if(settingColor !== color) setColor(settingColor);
    }

    const colors = [
        "#F2E7D5",
        "#F25454",
        "#7954F1"
    ];
    
    return {color};
}