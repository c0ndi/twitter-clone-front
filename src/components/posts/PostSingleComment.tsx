import { TComment } from "@/types/types";

export default function PostSingleComment({user, content}: TComment){
   return (
      <div className={"flex flex-col gap-2 bg-base-200 rounded-md p-3"}>
         <p className={"text-sm"}>
            {user.name}
            &nbsp;
            <span className="font-light text-gray-400">@{user._id}</span>
         </p>

         <p className={"text-base font-semibold"}>
            {content}
         </p>
      </div>
   )
}