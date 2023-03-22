import {addComment} from "@/utils/posts/addComment";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import router from "next/router";
import {useForm} from "react-hook-form";

type TPostNewComment = {
   _id: string;
}

type TComment = {
   comment: string;
}

export default function AddComment({_id}: TPostNewComment) {
   const queryClient = useQueryClient()

   const {register, handleSubmit, reset} = useForm<TComment>();

   const QUERY_ID = `post-${_id}`;

   const newCommentMutation = useMutation({
      mutationFn: (data: { comment: string, _id: string }) => addComment({comment: data.comment, _id}),
      onSuccess: () => {
         Promise.all([
            queryClient.invalidateQueries(["posts"]),
            queryClient.invalidateQueries([QUERY_ID])
         ])

         if (router.pathname === "/posts")
            router.push(`/posts/${_id}`);
      }
   });

   const onSubmit = ({comment}: TComment) => {
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