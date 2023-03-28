import AddPost from "@/components/posts/AddPost"
import AddComment from "@/components/posts/Post/Comments/AddComment"
import Comments from "@/components/posts/Post/Comments/Comments"
import Posts from "@/components/posts/Posts"
import Loading from "@/components/shared/Loading"
import { getPosts } from "@/utils/posts/getPosts"
import { getSinglePost } from "@/utils/posts/getSinglePost"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"
import Image from 'next/image'
import LikePost from "@/components/posts/Post/Likes/LikePost"
import { useAuth } from "@/hooks/useAuth"
import { useLoading } from "@/hooks/useLoading"
import Navbar from "@/components/shared/Navbar"
import Spinner from "@/components/shared/Spinner"

export default function Home() {
   const {isAuth, user} = useAuth();
   const authLoading = useLoading(isAuth);

   const { query } = useRouter();
   const QUERY_ID = `post-${query._id}`;
   const {data, isLoading, error} = useQuery({queryKey: [QUERY_ID], queryFn: () => getSinglePost(query._id)})

   if (isLoading || authLoading) {
      return <Spinner />
   }

   if (error) {
      return <p>Error occured:(</p>
   }

   const {_id, authorName, authorId, content, photo, likes, comments} = data.post;
   return (
      <main className={"max-w-[720px] mx-auto"}>
         <Navbar user={user}/>
         {photo &&
            <div className={"mb-2 relative h-[504px]"}>
               <Image
                  src={photo}
                  alt={"Post photo"}
                  layout={"fill"}
                  className={"object-cover rounded-xl rounded-t-none"}
               />
            </div>
         }

         <p className={"text-xl font-semibold"}>
            {authorName}
            &nbsp;
            <span className={"font-light text-gray-400"}>@{authorId}</span>
         </p>

         <div className={`mt-3 bg-base-200 rounded-md p-3 mb-2 ${photo && "rounded-b-none mb-0"}`}>
            <article className="prose">
               <ReactMarkdown>{content}</ReactMarkdown>
            </article>
         </div>

         <LikePost likes={likes} _id={_id} />
         <AddComment _id={_id} />
         <Comments maxLength={comments.length} comments={comments} _id={_id} />
      </main>
   )
}
