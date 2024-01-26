import React from 'react'

const Title = ({ text, number }) => {
    return (
        <h1 style={{ color: text }}> {number} </h1>
    )
}

export default Title;