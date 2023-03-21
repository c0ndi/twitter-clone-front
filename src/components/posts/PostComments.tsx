import {TComment} from '@/types/types';
import {useQueryClient} from '@tanstack/react-query';
import PostAllCommentsModal from './PostAllCommentsModal';
import PostSingleComment from './PostSingleComment';


export default function PostComments({
                                    isSinglePost,
                                    comments,
                                    _id
                                 }: { isSinglePost?: boolean, comments?: TComment [], _id: string }) {
   if (comments?.length) {
      return (
         <div className={"pt-4"}>
            <div className={"flex items-center justify-between w-full py-2"}>
               <p className={"text-sm font-bold"}>Comments: {comments?.length}</p>

               {comments?.length > 3 &&
                  <div>
                     <label
                        htmlFor="my-modal"
                        className="cursor-pointer font-medium text-xs text-center w-full uppercase text-primary"
                     >
                        show all comments
                     </label>
                  </div>
               }
            </div>

            <div className={"flex flex-col gap-2"}>
               {comments?.map(({user, content}, index) => {
                  if (index < 3) {
                     return (
                        <PostSingleComment
                           key={index}
                           user={user}
                           content={content}
                        />
                     )
                  }
               })}
            </div>


            {!isSinglePost &&
               <PostAllCommentsModal
                  comments={comments}
                  _id={_id}
               />
            }
         </div>
      )
   }
   return <></>
}