import React from 'react'

const Container = ({children,maxWidth}) => {
  return (
    <div className={`w-full ${maxWidth} mx-auto`}>
        {children}
    </div>
  )
}

export default Container