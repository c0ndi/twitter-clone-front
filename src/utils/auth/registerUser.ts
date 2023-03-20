import { TInputsRegister } from "@/types/types";

export const registerUser = async (data: TInputsRegister) => {
   const res = await fetch(`http://localhost:8080/auth/register`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
   })

   return res;
}