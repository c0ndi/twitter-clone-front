import Head from "next/head";

import Posts from "@/components/posts/Posts";
import AddPost from "@/components/posts/AddPost";

import {useQuery, useQueryClient} from "@tanstack/react-query";
import { getPosts } from "@/utils/posts/getPosts";
import { useAuth } from "@/hooks/useAuth";
import { useLoading } from "@/hooks/useLoading";
import Spinner from "@/components/shared/Spinner";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
   const queryClient = useQueryClient();

   const {data, isLoading, error} = useQuery({queryKey: ['posts'], queryFn: getPosts})

   return (
      <main className={"max-w-[720px] mx-auto px-3"}>
         <Navbar />

         <AddPost/>

         <Posts data={data} isLoading={isLoading} error={error}/>
      </main>
   )
}
