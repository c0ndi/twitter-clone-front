import Head from "next/head";
import {useAuth} from "@/hooks/useAuth";
import Posts from "@/components/posts/Posts";
import AddPost from "@/components/posts/AddPost";

export default function Home() {
   const {isAuth, user} = useAuth();

   if (!isAuth && !user) {
      return <p>Loading...</p>
   }

   return (
      <div>
         <Head>
            <title>Home</title>
         </Head>

         <AddPost/>
         <Posts/>
      </div>
   )
}
