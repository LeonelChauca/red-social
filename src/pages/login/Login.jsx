import React from 'react'
import { InputLogin } from './components/InputLogin'

export const Login = () => {
  return (
    <div className='h-screen'>
        <div className=' bg-blue-600 p-4 text-white'>
            <h2>Red Social</h2>
        </div>  
        <div className='flex justify-center items-center '>
            <div>
                <h2>Iniciar Sesion</h2>
                <InputLogin type='text' name='usuario' id='user'/>
            </div>
        </div>
    </div>
  )
}
