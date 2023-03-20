import Head from "next/head";

import Posts from "@/components/posts/Posts";
import AddPost from "@/components/posts/AddPost";

import {useLoading} from "@/hooks/useLoading";
import {useAuth} from "@/hooks/useAuth";

import {getPosts} from "@/utils/posts/getPosts";
import {addPost} from "@/utils/posts/addPost";

import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {likePost} from "@/utils/posts/likePost";

export default function Home() {
   const queryClient = useQueryClient()
   const {data, isLoading, error} = useQuery({queryKey: ['posts'], queryFn: getPosts})

   const newPostMutation = useMutation({
      mutationFn: (formData: FormData) => addPost(formData),
      onSuccess: () => {
         queryClient.invalidateQueries(["posts"]);
      }
   })

   const newLikeMutation = useMutation({
      mutationFn: (postId: string) => likePost(postId),
      onSuccess: () => {
         queryClient.invalidateQueries(["posts"]);
      }
   });

   return (
      <main className={"max-w-[720px] mx-auto border border-y-0"}>
         <AddPost newPostMutation={newPostMutation}/>

         <Posts
            data={data}
            isLoading={isLoading}
            error={error}
            newLikeMutation={newLikeMutation}
         />
      </main>
   )
}
