// state.js
import { useState } from "react";

const useNumber = () => {
    const [number, setNumber] = useState(0);
    const [text, newText] = useState("black");
    const [hide, newHide] = useState(true);

    const increase = () => {
        setNumber(number + 1);
    }
    const decrease = () => {
        setNumber(number + -  1);
    }
    const setZero = () => {
        setNumber(0);

    }

    const hideShow = () => {
        newHide(!hide);
    }

    const colorchange = () => {
        newText(text === "black" ? "Green" : "black");
    }

    return { increase, decrease, colorchange, setZero, hideShow, number, text, hide };
}

export default useNumber;
