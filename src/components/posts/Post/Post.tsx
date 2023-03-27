import Image from "next/image";

import {useAuth} from "@/hooks/useAuth";
import {IPost} from "@/types/types";
import {addComment} from "@/utils/posts/addComment";
import {likePost} from "@/utils/posts/likePost";

import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import ReactMarkdown from "react-markdown";
import Comments from "./Comments/Comments";
import AddComment from "./Comments/AddComment";
import Link from "next/link";
import LikePost from "./Likes/LikePost";
import HeartPNG from '../../../../public/icons/heart_white.png'
import {getUser} from "@/utils/user/getUser";
import Loading from "@/components/shared/Loading";
import Photo from "./Photo";
import PhotoModal from "@/components/shared/PhotoModal";

export default function Post({_id, authorId, author, content, photo, likes, comments}: IPost) {
   const {profilePicture, name} = author;

   return (
      <div className={"flex flex-col bg-base-300 rounded-xl p-3 transition-all relative hover:bg-base-200"}>
         <div className={"flex w-full gap-3"}>
            <div className={"flex flex-col items-center justify-between"}>
               {profilePicture ?
                  <Image
                     src={profilePicture}
                     alt={"Profile picture"}
                     width={56}
                     height={56}
                     className={"rounded-full"}
                  />
                  :
                  <div className={"bg-secondary w-14 h-14 flex justify-center items-center text-3xl text-white rounded-full"}>
                     <p className={"uppercase font-semibold pb-1"}>{name.split("")[0]}</p>
                  </div>
               }

               <p className={"text-lg font-medium"}>{likes.length > 0 && likes.length}</p>
            </div>
            <div className={"w-full"}>
               <p className={"mt-2 text-2xl font-semibold"}>
                  {name}
               </p>

               <div className={"my-3 text-lg"}>
                  {content}
               </div>

               {photo &&
                  <PhotoModal elementUrl={photo}>
                     <Image
                        src={photo}
                        alt={"Post photo"}
                        layout={"fill"}
                        className={"object-cover rounded-lg cursor-pointer"}
                     />
                  </PhotoModal>
               }

               <div className={"grid grid-cols-3 gap-2"}>
                  <LikePost
                     likes={likes}
                     _id={_id}
                  />

                  <Link
                     passHref
                     href={`/posts/${_id}`}
                  >
                     <button
                        className={"btn btn-primary btn-xs w-full"}
                        type={"submit"}
                     >
                        Comment
                     </button>
                  </Link>

                  <button
                     className={"btn btn-accent btn-xs w-full"}
                     type={"submit"}
                  >
                     Report
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}