export async function addUserPicture(formData: FormData) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/picture`, {
      method: "POST",
      credentials: "include",
      body: formData,
   })

   return res.json();
}