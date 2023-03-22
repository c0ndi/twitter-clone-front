import Image from "next/image";

import {useAuth} from "@/hooks/useAuth";
import {IPost} from "@/types/types";
import {addComment} from "@/utils/posts/addComment";
import {likePost} from "@/utils/posts/likePost";

import {useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import ReactMarkdown from "react-markdown";
import Comments from "./Comments/Comments";
import AddComment from "./Comments/AddComment";
import Link from "next/link";
import LikePost from "./Likes/LikePost";


export default function Post({_id, authorName, authorId, content, photo, likes, comments}: IPost) {
   return (
      <div className={"flex flex-col bg-base-300 rounded-xl p-3"}>
         <Link href={`/posts/${_id}`}>
            <span className={"font-light text-gray-400 text-sm"}>@{authorId}</span>

            <p className={"text-xl font-semibold"}>
               {authorName}
               &nbsp;
            </p>

            <div className={`mt-3 bg-base-200 p-3 rounded-md ${photo ? "rounded-b-none mb-0" : "mb-2"}`}>
               <article className="prose max-w-full">
                  <ReactMarkdown>{content}</ReactMarkdown>
               </article>
            </div>

            {photo &&
               <div className={"mb-4 relative h-[504px]"}>
                  <Image
                     src={photo}
                     alt={"Post photo"}
                     layout={"fill"}
                     className={"object-cover rounded-xl rounded-t-none"}
                  />
               </div>
            }
         </Link>

         <div className={"grid grid-cols-3 gap-2"}>
            <LikePost
               likes={likes}
               _id={_id}
            />

            <Link passHref href={`/posts/${_id}`}>
               <button
                  className={"btn btn-primary w-full"}
                  type={"submit"}
               >
                  Comment
               </button>
            </Link>

            <button
               className={"btn btn-accent w-full"}
               type={"submit"}
               disabled
            >
               Report - <span className={"italic"}>&nbsp;Soon!</span>
            </button>
         </div>
         {/*<Comments*/}
         {/*   maxLength={3}*/}
         {/*   comments={comments}*/}
         {/*   _id={_id}*/}
         {/*/>*/}
      </div>
   )
}