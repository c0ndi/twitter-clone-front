export async function getUserPosts() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/posts`, {
      method: "GET",
      credentials: "include",
      headers: {
         "Content-Type": "application/json",
      },
      next: {revalidate: 10}
   });

   return res.json();
}