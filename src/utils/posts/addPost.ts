export const addPost = async (formData: FormData) => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "POST",
      credentials: "include",
      body: formData,
   })

   return res.json();
}