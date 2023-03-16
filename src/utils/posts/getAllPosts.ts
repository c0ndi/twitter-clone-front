export const getAllPosts = async () => {
   const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      next: {revalidate: 30},
      method: "GET",
      credentials: "include",
      headers: {
         "Content-Type": "application/json",
      }
   });

   return posts;
}