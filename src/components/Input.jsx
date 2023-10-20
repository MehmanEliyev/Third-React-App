import React from 'react'

const Input = ({className, type, placeholder,children,onChange}) => {
  return (
    <div>
        <input className={className} type = {type} placeholder = {placeholder} onChange= {onChange}/>
        {children}
    </div>
  )
}

export default Input
