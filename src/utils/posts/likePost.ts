export async function likePost(_id: string) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/like/${_id}`, {
      method: "POST",
      credentials: "include",
      headers: {
         "Content-Type": "application/json",
      }
   });

   return res.json();
}