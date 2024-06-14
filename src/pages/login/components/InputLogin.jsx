import React from 'react'

export const InputLogin = ({type="text",name="",id="",placeholder=""}) => {
  return (
    <div className='input p-2 flex flex-col'>
        <label htmlFor={id}>{name}</label>
        <input className=' p-1 focus:outline-none border-b focus:border-blue-700' type={type} name={name} id={id} placeholder={placeholder}/>
    </div>
  )
}
