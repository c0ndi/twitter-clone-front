import Head from "next/head";

import Posts from "@/components/posts/Posts";
import AddPost from "@/components/posts/AddPost";

import {useQuery} from "@tanstack/react-query";
import { getPosts } from "@/utils/posts/getPosts";

export default function Home() {
   return (
      <main className={"max-w-[720px] mx-auto"}>
         <AddPost/>

         <Posts/>
      </main>
   )
}
