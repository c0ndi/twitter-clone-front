import Image from "next/image";

import {useAuth} from "@/hooks/useAuth";
import {IPost} from "@/types/types";
import {addComment} from "@/utils/posts/addComment";
import {likePost} from "@/utils/posts/likePost";

import {useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import ReactMarkdown from "react-markdown";

import PostNewComment from "./PostNewComment";
import PostLikes from "./PostLikes";
import PostComments from "./PostComments";

export default function Post({isSinglePost, _id, authorName, authorId, content, photo, likes, comments}: IPost) {
   const queryClient = useQueryClient()

   return (
      <div className={"flex flex-col gap-2 bg-base-300 rounded-xl p-3"}>
         <p className={"text-xl font-semibold"}>
            {authorName}
            &nbsp;
            <span className={"font-light text-gray-400"}>@{authorId}</span>
         </p>

         <div className={"bg-base-200 rounded-md p-3 my-10"}>
            <article className="prose">
               <ReactMarkdown>{content}</ReactMarkdown>
            </article>
         </div>

         {photo &&
            <div className={"mt-10 relative h-[504px]"}>
               <Image
                  src={photo}
                  alt={"Post photo"}
                  layout={"fill"}
                  className={"object-cover rounded-xl"}
               />
            </div>
         }

         <PostLikes queryClient={queryClient} likes={likes} _id={_id} />
         <PostComments comments={comments} _id={_id} isSinglePost/>
         <PostNewComment _id={_id} />
      </div>
   )
}