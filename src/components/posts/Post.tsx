import {IPost} from "@/types/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Post({authorName, authorId, title, content, photo}: IPost) {
   return (
      <div className={"flex flex-col gap-2 bg-base-100 border border-x-0 p-3"}>
         <p className={"text-xl font-semibold"}>
            {authorName}
            &nbsp;
            <span className={"font-light text-gray-400"}>@{authorId}</span>
         </p>
         {/*<p className={"text-3xl font-semibold"}>{title}</p>*/}
         <article className="pt-12 prose">
            <ReactMarkdown>{content}</ReactMarkdown>
         </article>

         {photo &&
            <div className={"mt-10 relative h-[504px]"}>
               <Image
                  src={photo}
                  alt={title}
                  layout={"fill"}
                  className={"object-cover rounded-xl"}
               />
            </div>
         }
      </div>
   )
}