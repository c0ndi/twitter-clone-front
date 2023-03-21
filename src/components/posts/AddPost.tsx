import {IPost} from "@/types/types";
import {addPost} from "@/utils/posts/addPost";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useController, useForm} from "react-hook-form";

import CodeMirror from "@uiw/react-codemirror";
import {EditorView} from "@codemirror/view"
import {markdown, markdownLanguage} from "@codemirror/lang-markdown";
import {languages} from "@codemirror/language-data";
import {useContext, useState} from "react";

export default function AddPost() {
   const queryClient = useQueryClient();

   const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<IPost>();
   const [content, setContent] = useState<string>("");

   const newPostMutation = useMutation({
      mutationFn: (formData: FormData) => addPost(formData),
      onSuccess: () => {
         queryClient.invalidateQueries(["posts"]);
      }
   })

   const onSubmit = async (data: IPost) => {
      const {photo} = data;
      const formData = new FormData();

      if (photo) {
         formData.append("photo", photo[0]);
      }

      formData.append("content", content);

      newPostMutation.mutate(formData);
      reset();
   }

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className={"flex flex-col gap-2 p-3 bg-base-300 rounded-xl"}
      >
         <CodeMirror
            value={content}
            width="500px"
            height="30vh"
            minWidth="100%"
            minHeight="30vh"
            theme={"dark"}
            extensions={[
               markdown({base: markdownLanguage, codeLanguages: languages}),
            ]}
            onChange={(value) => setContent(value)}
         />
         <input
            {...register("photo")}
            type={"file"}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
         />
         <input
            type="submit"
            className={"btn btn-primary"}
         />
      </form>
   )
}