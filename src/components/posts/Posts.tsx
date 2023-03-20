import {IPost} from "@/types/types";
import {getPosts} from "@/utils/posts/getPosts";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Key, useEffect, useState} from "react"
import Post from "./Post";

export default function Posts({data, newLikeMutation, isLoading, error}: { data: {posts: IPost []} | undefined, newLikeMutation: any, isLoading: boolean, error: any}) {
   if (isLoading) {
      return <p>loading...</p>
   }

   if (error) {
      return <p>Error occured:(</p>
   }

   return (
      <div className={"mt-32"}>
         <div className={"grid grid-cols-1 gap-10 w-full"}>
            {data?.posts.map(({_id, authorName, authorId, content, photo, likes}: IPost, key: Key | null | undefined) => {
               return (
                  <Post
                     key={key}
                     _id={_id}
                     authorName={authorName}
                     authorId={authorId}
                     content={content}
                     photo={photo}
                     likes={likes}
                     newLikeMutation={newLikeMutation}
                  />
               )
            })}
         </div>
      </div>
   )
}