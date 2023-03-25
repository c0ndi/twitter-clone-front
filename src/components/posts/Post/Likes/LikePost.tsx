import Spinner from "@/components/shared/Spinner";
import {useAuth} from "@/hooks/useAuth";
import {likePost} from "@/utils/posts/likePost";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import HeartWhite from '../../../../../public/icons/white_heart.svg'
import Image from 'next/image'

type TPostLikes = {
   likes: string[] | [];
   _id: string;
}

type TLikeButtonText = {
   likes: number;
   isLiked: boolean;
}

export default function LikePost({likes, _id}: TPostLikes) {
   const {isAuth, user} = useAuth();
   const queryClient = useQueryClient()

   const [loading, setLoading] = useState(false);

   const newLikeMutation = useMutation({
      mutationFn: (postId: string) => {
         setLoading(true);

         return likePost(postId)
      },
      onSettled: (data, error, variables, context) => {
         if (data) {
            setLoading(false);
         }
      },
      onSuccess: () => {
         queryClient.invalidateQueries(["posts"]);
      }
   });

   const isLiked = likes.includes(user?._id as never);

   return (
      <button
         className={`btn btn-xs btn-secondary w-full`}
         onClick={() => newLikeMutation.mutate(_id)}
      >
         <Image
            src={HeartWhite}
            alt={"Like"}
            height={16}
         />
      </button>
   )
}