export async function likePost(_id: string) {
   const res = await fetch(`http://localhost:8080/posts/like/${_id}`, {
      method: "POST",
      credentials: "include",
      headers: {
         "Content-Type": "application/json",
      }
   });

   return res.json();
}