import { useState } from "react";

export const useAlcoholInfo = ({
    name,
    url,
    content,
}) => {

    const [alcoholInfo, setAlcoholInfo] = useState({
        name, url, content
    });

    const setName = (name) => {
        setAlcoholInfo({
            ...alcoholInfo,
            name
        });
    };

    const setUrl = (url) =>{
        setAlcoholInfo({
            ...alcoholInfo,
            url
        });
    };
    const setContent =(content) => {
        setAlcoholInfo({
            ...alcoholInfo,
            content
        });
    };

    const clearInfo = () => {
        setAlcoholInfo({
            name: '',
            url: '',
            content: '',
        });
    }

    return {alcoholInfo, setName, setUrl, setContent, clearInfo};
}