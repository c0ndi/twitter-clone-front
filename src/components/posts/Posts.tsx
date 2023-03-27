import {IPost} from "@/types/types";
import {getPosts} from "@/utils/posts/getPosts";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Key, useEffect, useState} from "react"
import Spinner from "../shared/Spinner";
import Post from "./Post/Post";

type TPosts = {
   data: {
      posts: IPost[];
   },
   isLoading: boolean,
   error: any,
}

export default function Posts({data, isLoading, error}: TPosts) {
   if(isLoading) {
      return <Spinner />
   }

   if(error) {
      return <p>Error occured:(</p>
   }
   return (
      <div className={"mt-10"}>
         <div className={"grid grid-cols-1 gap-3 w-full"}>
            {data?.posts.map(({_id, authorId, author, content, photo, likes, comments}: IPost, key: Key | null | undefined) => {
               return (
                  <Post
                     key={key}
                     _id={_id}
                     authorId={authorId}
                     author={author}
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