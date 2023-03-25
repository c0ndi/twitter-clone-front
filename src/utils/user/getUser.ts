export async function getUser(_id: string) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${_id}`, {
      method: "GET",
      credentials: "include",
      headers: {
         'Content-Type': 'application/json',
      },
      next: {revalidate: 10}
   })

   return res.json();
}