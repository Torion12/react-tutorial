import React from "react";

const Button = ({ onClick, title, color }) => {
    const myStyles = {
        color: 'red',
        fontSize: '16px',
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px',
    };
    const mergedStyles = { ...myStyles, color };
    return (
        <button style={mergedStyles} onClick={onClick} >{title}</button>
    );
}
export default Button;