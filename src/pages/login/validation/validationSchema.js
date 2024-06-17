import { z } from 'zod';

export const schemaLogin = z.object({
  email: z.string().email("Correo electrónico no válido").nonempty("El correo es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres").nonempty("La contraseña es obligatoria"),
});

export const schemaRegister = z.object({
  name: z.string().nonempty("El nombre es obligatorio"),
  last_name: z.string().nonempty("El apellido es obligatorio"),
  correo: z.string().email("Correo electrónico no válido"),
  numero: z.string().min(8, "El número de celular debe tener al menos 8 caracteres"),
  f_nac: z.string().min(10,"fecha no valida"),
  pass: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
