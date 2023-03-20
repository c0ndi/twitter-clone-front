export const isLogIn = async () => {
   const res = await fetch(`http://localhost:8080/user`, {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080'}
   })

   return res;
}