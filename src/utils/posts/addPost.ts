export const addPost = async (formData: FormData) => {
   const newPost = await fetch("http://localhost:8080/posts", {
      method: "POST",
      credentials: "include",
      body: formData,
   })

   console.log(newPost)
   console.log(await newPost.json())
}