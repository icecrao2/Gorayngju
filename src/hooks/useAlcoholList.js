import { useState } from "react";

export const useAlcoholList = (initial = []) => {
    
    const [alcoholList, setAlcoholList] = useState(initial);

    const pushAlcohol = (alcohol) => {
        setAlcoholList([...alcoholList, alcohol]);
    };

    return {alcoholList, pushAlcohol};
}