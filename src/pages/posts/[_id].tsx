import AddPost from "@/components/posts/AddPost"
import Post from "@/components/posts/Post"
import Posts from "@/components/posts/Posts"
import { getPosts } from "@/utils/posts/getPosts"
import { getSinglePost } from "@/utils/posts/getSinglePost"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"

export default function Home() {
   const { query } = useRouter();
   const {data, isLoading, error} = useQuery({queryKey: ['post'], queryFn: () => getSinglePost(query._id)})

   if (isLoading) {
      return <p>loading...</p>
   }

   if (error) {
      return <p>Error occured:(</p>
   }

   const {_id, authorName, authorId, content, photo, likes, comments} = data.post;
   return (
      <main className={"max-w-[720px] mx-auto"}>
         <Post
            _id={_id}
            authorName={authorName}
            authorId={authorId}
            content={content}
            photo={photo}
            likes={likes}
            comments={comments}
         />
      </main>
   )
}
