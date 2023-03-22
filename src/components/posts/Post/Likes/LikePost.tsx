import Spinner from "@/components/shared/Spinner";
import {useAuth} from "@/hooks/useAuth";
import {likePost} from "@/utils/posts/likePost";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useState} from "react";

type TPostLikes = {
   likes: string[] | [];
   _id: string;
}

type TLikeButtonText = {
   likes: string[] | [];
   isLiked: boolean;
}

function LikeButtonText({likes, isLiked}: TLikeButtonText) {
   return (
      <>
         {likes.length}
         &nbsp;
         {isLiked ?
            "Unlike"
            :
            "Like"
         }
      </>
   )
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

   const isLiked = likes.includes(user._id as never);

   return (
      <div className={"flex items-center gap-2 w-full"}>
         <button
            className={"btn btn-secondary w-full"}
            onClick={() => newLikeMutation.mutate(_id)}
         >
            {loading  ?
               <Spinner />
               :
               <LikeButtonText
                  likes={likes}
                  isLiked={isLiked}
               />
            }
         </button>
      </div>
   )
}