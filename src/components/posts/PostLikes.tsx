import { useAuth } from "@/hooks/useAuth";
import { likePost } from "@/utils/posts/likePost";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function PostLikes({likes, _id}: {queryClient: any, likes?: string[], _id: string}) {
   const {isAuth, user} = useAuth();

   const queryClient = useQueryClient()
   const isLiked = likes && user && likes?.includes(user?._id) || false;

   const newLikeMutation = useMutation({
      mutationFn: (postId: string) => likePost(postId),
      onSuccess: () => {
         queryClient.invalidateQueries(["posts"]);
      }
   });

   return (
      <div className={"flex items-center gap-2"}>
         <p className={"font-bold text-xl h-full bg-base-200 p-3 rounded-xl"}>{likes && likes.length}</p>

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