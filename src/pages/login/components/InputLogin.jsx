import React, { forwardRef } from 'react';

export const InputLogin = ({ type = "text", name = "", id = "", placeholder = "", register }) => {
  return (
    <div className='input p-2 flex flex-col'>
      <label htmlFor={id}>{name}</label>
      <input 
        {...(register ? register(id) : {})}
        className='p-1 focus:outline-none border-b focus:border-blue-700' 
        type={type} 
        placeholder={placeholder} 
      />
    </div>
  );
};
