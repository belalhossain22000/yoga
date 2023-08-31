import React from 'react'

const Button = ({ children, px,py }) => {
    return (
        <button className={`btn ${px} ${py} w-fit `}>
            {children}
        </button>
    )
}

export default Button