import {useAuth} from "@/hooks/useAuth";
import {IPost} from "@/types/types";
import {likePost} from "@/utils/posts/likePost";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Post({_id, authorName, authorId, content, photo, likes, newLikeMutation}: IPost) {
   const {isAuth, user} = useAuth();

   const isLiked = likes && user && likes?.includes(user?._id) || false;
   console.log(isLiked)
   return (
      <div className={"flex flex-col gap-2 bg-base-100 border border-x-0 p-3"}>
         <p className={"text-xl font-semibold"}>
            {authorName}
            &nbsp;
            <span className={"font-light text-gray-400"}>@{authorId}</span>
         </p>
         <article className="pt-12 prose">
            <ReactMarkdown>{content}</ReactMarkdown>
         </article>

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

         <p className={"font-bold text-xl"}>{likes && likes.length}</p>

         <button
            className={"btn btn-secondary"}
            onClick={() => newLikeMutation.mutate(_id)}
         >
            {isLiked ?
               "Unlike"
               :
               "Like"
            }
         </button>
      </div>
   )
}