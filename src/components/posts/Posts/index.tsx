import {IPost} from "@/types/types";
import {getPosts } from "@/utils/posts/getPosts";
import {useQuery, useQueryClient } from "@tanstack/react-query";
import {Key, useEffect, useState} from "react"

export default function Posts() {
   const queryClient = useQueryClient()
   const { data, isLoading, error }= useQuery({queryKey: ['posts'], queryFn: getPosts})

   if (isLoading) {
      return <p>no posts:(</p>
   }

   if(error) {
      return <p>Error occured:(</p>
   }

   return (
      <div>
         <p>Posts</p>

         {data?.posts.map((post: IPost, key: Key | null | undefined) => {
            return (
               <div key={key}>
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                  <p>{post._id}</p>
                  <p>{post.createdAt}</p>
                  {post.photo ?
                     <img
                        src={post.photo}
                        alt=""
                        style={{width: "100px", height: "100px"}}
                     />
                     :
                     <></>
                  }
               </div>
            )
         })}
      </div>
   )
}