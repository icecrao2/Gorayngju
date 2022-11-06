import { useState } from "react";
import { localStorageManager } from "../utils/localStorageManager";

export const useAlcoholList = (initial = []) => {
    
    const [alcoholList, setAlcoholList] = useState(initial);

    const pushAlcohol = (alcohol) => {
        setAlcoholList([...alcoholList, alcohol]);
        localStorageManager.setData("list", [...alcoholList, alcohol]);
    };

    return {alcoholList, pushAlcohol};
}