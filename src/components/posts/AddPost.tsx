import {IPost} from "@/types/types";
import {addPost} from "@/utils/posts/addPost";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useController, useForm} from "react-hook-form";

import CodeMirror from "@uiw/react-codemirror";
import {markdown, markdownLanguage} from "@codemirror/lang-markdown";
import {languages} from "@codemirror/language-data";
import {useState} from "react";

export default function AddPost({mutation}: { mutation: any }) {
   const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<IPost>();
   const [content, setContent] = useState<string>("");

   const onSubmit = async (data: IPost) => {
      const {title, photo} = data;
      const formData = new FormData();

      if (photo) {
         formData.append("photo", photo[0]);
      }

      formData.append("title", title);
      formData.append("content", content);

      mutation.mutate(formData);
      reset();
   }

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className={"flex flex-col gap-2 p-3 border border-x-0 border-b-0"}
      >
         <input
            {...register("title", {required: true})}
            placeholder="Tytul"
            className="input input-bordered w-full w-full"
         />
         <CodeMirror
            value={content}
            width="500px"
            height="30vh"
            minWidth="100%"
            minHeight="30vh"
            extensions={[
               markdown({base: markdownLanguage, codeLanguages: languages}),
            ]}
            onChange={(value) => setContent(value)}
            className="border border-gray-300"
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