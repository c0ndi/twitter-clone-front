import {TComment} from '@/types/types';
import {useQueryClient} from '@tanstack/react-query';
import Comment from './Comment';

type TComments = {
   comments: TComment[] | [];
   _id: string;
   maxLength: number;
}

export default function Comments({comments, _id, maxLength}: TComments) {
   if (comments?.length) {
      return (
         <div className={"pt-4 mb-2"}>
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
                  if (index < maxLength) {
                     return (
                        <Comment
                           key={index}
                           user={user}
                           content={content}
                        />
                     )
                  }
               })}
            </div>
         </div>
      )
   }
   return <></>
}