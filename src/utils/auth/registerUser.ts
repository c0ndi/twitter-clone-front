import { TInputsRegister } from "@/types/types";

export const registerUser = async (data: TInputsRegister) => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
   })

   return res;
}