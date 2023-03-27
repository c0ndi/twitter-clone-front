export const isLogIn = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080'}
   })

   return res;
}