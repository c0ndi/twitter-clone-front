export async function logout(){
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/logout`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
      credentials: 'include',
   })

   return res.json();
}