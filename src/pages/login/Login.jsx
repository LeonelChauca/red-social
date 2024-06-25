import React from 'react'
import { InputLogin } from './components/InputLogin'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import {toastError} from '../../helpers/ToastCustom'
import {login} from '../../api/authService'
export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ reValidateMode: 'onSubmit'});
  const onSubmit = (data) => {
    console.log(data);
    login(data)
  };
  return (
      <div className="flex flex-grow justify-center items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
               className="flex flex-col max-w-[440px] w-5/6 md:w-1/2 p-10 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
                  <h2 className=' font-semibold text-center text-2xl py-5'>Iniciar Sesion</h2>
                  <hr/>
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='py-5'>
                      <InputLogin type="text" name="Usuario" id="correo" placeholder='example@example.com' register={register}/>
                      <InputLogin type="password" name="Contraseña" id="contrasenia" register={register}/>
                      <button type='submit' className=' w-full bg-green-500 p-2 mt-5 text-white font-semibold hover:bg-green-600'>Iniciar Sesion</button>
                      <a href="" onClick={()=>{navigate("registro")}} className=' font-light text-sm cursor-pointer text-blue-600'>Registrate aca</a>
                    </div>
                  </form>
              </motion.div>
      </div>

  )
}
