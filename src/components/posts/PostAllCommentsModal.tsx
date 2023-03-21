import {TComment} from "@/types/types"
import Comment from "./PostSingleComment"
import NewComment from "./PostNewComment"

export default function PostAllCommentsModal({comments, _id}: { comments?: TComment [], _id: string }) {
   return (
      <>
         <input
            type="checkbox"
            id="my-modal"
            className="modal-toggle"
         />
         <label
            htmlFor="my-modal"
            className="modal cursor-pointer"
         >
            <label
               className="modal-box relative flex flex-col gap-2"
               htmlFor=""
            >
               {comments?.map(({user, content}, index) => {
                  return (
                     <Comment
                        key={index}
                        user={user}
                        content={content}
                     />
                  )
               })}

               <NewComment _id={_id}/>

               <div className="modal-action mt-0">
                  <label
                     htmlFor="my-modal"
                     className="btn"
                  >
                     Close
                  </label>
               </div>
            </label>
         </label>
      </>
   )
}