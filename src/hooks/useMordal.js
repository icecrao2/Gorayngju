import { useState } from "react";

export const useMordal = (initial=false) => {

    const [mordalState, setMordalState] = useState(initial);


    return {mordalState, setMordalState};
}