import { TInputsLogin } from "@/types/types";

export const loginUser = async (data: TInputsLogin) => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080' }
   })

   if(!res.ok) {
      throw new Error('Error');
   }

   return res;
}