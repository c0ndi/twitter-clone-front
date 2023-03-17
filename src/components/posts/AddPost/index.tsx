import {IPost} from "@/types/types";
import { addPost } from "@/utils/posts/addPost";
import {useMutation, useQueryClient } from "@tanstack/react-query";
import {useForm} from "react-hook-form";

export default function AddPost() {
   const queryClient = useQueryClient()
   const {register, handleSubmit, watch, formState: {errors}} = useForm<IPost>();

   const mutation = useMutation({
      mutationFn: (formData: FormData) => addPost(formData),
      onSuccess: () => {
         // @ts-ignore
         queryClient.invalidateQueries("posts");
      }
   })

   const onSubmit = async (data: IPost) => {
      const {title, content, photo} = data;
      const formData = new FormData();

      if(photo) {
         formData.append("photo", photo[0]);
      }

      formData.append("title", title);
      formData.append("content", content);

      mutation.mutate(formData);
   }

   return (
      <div>
         <p>Add Post</p>

         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", {required: true})} />
            <input {...register("content", {required: true})} />
            <input {...register("photo")} type={"file"}/>
            <input type="submit"/>
         </form>
      </div>
   )
}