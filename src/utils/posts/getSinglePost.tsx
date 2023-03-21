export async function getSinglePost(_id: string | string[] | undefined) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${_id}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
      credentials: 'include',
      next: {revalidate: 30},
   });
   console.log(res)

   return res.json();
}