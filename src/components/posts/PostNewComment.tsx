import { addComment } from "@/utils/posts/addComment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import router from "next/router";
import { useForm } from "react-hook-form";

export default function PostNewComment({_id}: {_id: string}) {
   const queryClient = useQueryClient()

   const {register, handleSubmit, reset} = useForm<{ comment: string }>();

   const newCommentMutation = useMutation({
      mutationFn: (data: { comment: string, _id: string }) => addComment({comment: data.comment, _id}),
      onSuccess: () => {
         queryClient.invalidateQueries(["posts"]);
         router.push(`/posts/${_id}`);
      }
   });

   const onSubmit = ({comment}: { comment: string }) => {
      newCommentMutation.mutate({comment, _id})

      reset();
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input
            type="text"
            {...register("comment", {required: true})}
            placeholder="Type your comment here"
            className="input input-bordered w-full mb-2 text-sm"
         />

         <button
            className={"btn btn-primary btn-sm w-full"}
            type={"submit"}
         >
            Comment
         </button>
      </form>
   )
}