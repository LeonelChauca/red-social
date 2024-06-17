import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { schemaRegister } from "../validation/validationSchema";
import { InputLogin } from './InputLogin';
import { toastError } from '../../../helpers/ToastCustom';
import { Toaster } from 'sonner';

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schemaRegister) , reValidateMode: 'onSubmit',});

  const onSubmit = (data) => {
    console.log(data);
    console.log("hola");
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a tu backend
  };
  useEffect(() => {
    if(errors.name) toastError(errors.name.message, "Error")
    if(errors.last_name) toastError(errors.last_name.message, "Error")
    if(errors.correo) toastError(errors.correo.message, "Error")
    if(errors.numero) toastError(errors.numero.message, "Error")
    if(errors.f_nac) toastError(errors.f_nac.message, "Error")
    if(errors.pass) toastError(errors.pass.message, "Error")
  }, [errors])
  
  return (
    <div className="flex flex-grow justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col max-w-[440px] w-5/6 md:w-1/2 p-10 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg"
      >
        <h2 className='font-semibold text-center text-2xl py-5'>Registrar Usuario</h2>
        <hr/>
        <div className='py-5'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <InputLogin type="text" name="Nombres" id="name" placeholder='Ingrese su nombre' register={register} />
            </div>
            <div className="mb-4">
              <InputLogin type="text" name="Apellidos" id="last_name" placeholder='Ingrese su apellido' register={register} />
            </div>
            <div className="mb-4">
              <InputLogin type="text" name="Correo" id="correo" placeholder='Ingrese su correo' register={register} />
            </div>
            <div className="mb-4">
              <InputLogin type="text" name="Numero de celular" id="numero" placeholder='Ingrese su Nro de celular' register={register} />
            </div>
            <div className="mb-4">
              <InputLogin type="date" name="Fecha de nacimiento" id="f_nac" placeholder='Ingrese su Fecha de nacimiento' register={register} />
            </div>
            <div className="mb-4">
              <InputLogin type="password" name="Contraseña" id="pass" placeholder='Ingrese su contraseña' register={register} />
            </div>
            <button type="submit" className='w-full bg-green-500 p-2 mt-5 text-white font-semibold hover:bg-green-600'>Registrar</button>
            <a href="#" onClick={() => navigate("registro")} className='font-light text-sm cursor-pointer text-blue-600 mt-2 block'>Registrate aca</a>
          </form>
        </div>
      </motion.div>
      <Toaster/>
    </div>
  );
}

export default Register;
