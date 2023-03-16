import { TInputsRegister } from "@/types/types";

export const registerUser = async (data: TInputsRegister) => {
   const res = await fetch(`http://localhost:8080/auth/register`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
   })

   if(!res.ok) {
      throw new Error('Error');
   }

   return res;
}