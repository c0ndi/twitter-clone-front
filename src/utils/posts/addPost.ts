export const addPost = async (formData: FormData) => {
   const res = await fetch("http://localhost:8080/posts", {
      method: "POST",
      credentials: "include",
      body: formData,
   })

   return res.json();
}