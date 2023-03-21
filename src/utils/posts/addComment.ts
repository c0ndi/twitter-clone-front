export async function addComment(data: {_id: string, comment: string}) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/comment/${data._id}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({comment: data.comment})
   });

   return res.json();
}