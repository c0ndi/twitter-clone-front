import {IPost} from "@/types/types";
import {getAllPosts} from "@/utils/posts/getAllPosts"
import {useEffect, useState} from "react"

export default function Posts() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      getAllPosts()
         .then(async (res) => {
            if (res.status == 200) {
               const postsData = await res.json()

               setPosts(postsData.posts)
            }
         })
   }, [])

   if (!posts) {
      return <p>no posts:(</p>
   }

   return (
      <div>
         <p>Posts</p>

         {posts.map((post: IPost, key) => {
            return (
               <div key={key}>
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                  <p>{post._id}</p>
                  <p>{post.createdAt}</p>
               </div>
            )
         })}
      </div>
   )
}