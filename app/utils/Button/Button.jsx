import React from 'react'

const Button = ({ children, px,py }) => {
    return (
        <div className={`btn ${px} ${py} w-fit`}>
            {children}
        </div>
    )
}

export default Button