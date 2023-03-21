import {IPost} from "@/types/types";
import {getPosts} from "@/utils/posts/getPosts";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Key, useEffect, useState} from "react"
import Post from "./Post";

export default function Posts() {
   const queryClient = useQueryClient();

   const {data, isLoading, error} = useQuery({queryKey: ['posts'], queryFn: getPosts})

   if (isLoading) {
      return <p>loading...</p>
   }

   if (error) {
      return <p>Error occured:(</p>
   }

   return (
      <div className={"mt-10"}>
         <div className={"grid grid-cols-1 gap-8 w-full"}>
            {data?.posts.map(({_id, authorName, authorId, content, photo, likes, comments}: IPost, key: Key | null | undefined) => {
               return (
                  <Post
                     key={key}
                     _id={_id}
                     authorName={authorName}
                     authorId={authorId}
                     content={content}
                     photo={photo}
                     likes={likes}
                     comments={comments}
                  />
               )
            })}
         </div>
      </div>
   )
}