import Loading from "@/components/shared/Loading";
import Navbar from "@/components/shared/Navbar";

import {useAuth} from "@/hooks/useAuth";
import {useLoading} from "@/hooks/useLoading";
import {getUserPosts} from "@/utils/user/getUserPosts";

import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import UserProfileSection from "@/components/user/UserProfileSection";
import Posts from "@/components/posts/Posts";

export default function Page() {
   const {isAuth, user} = useAuth();
   const loading = useLoading(isAuth);

   const queryClient = useQueryClient();

   const USER_POSTS_QUERY_KEY = `${user?._id}-posts`;
   const {data, isLoading, error} = useQuery({queryKey: [USER_POSTS_QUERY_KEY], queryFn: () => getUserPosts()})

   if (loading) {
      return <Loading />
   }

   return (
      <main className={"max-w-[720px] mx-auto px-3"}>
         <UserProfileSection user={user}/>

         <Posts data={data} isLoading={isLoading} error={error}/>
      </main>
   )
}

/*
*    const profilePictureMutation = useMutation({
      mutationFn: (formData: FormData) => addUserPicture(formData),
      onSuccess: () => {
         queryClient.invalidateQueries(["user"]);
      }
   })

   const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<{ photo: any, type: string }>();

   const onSubmit = async (data: { photo: any, type: string }) => {
      const {photo, type} = data;
      const formData = new FormData();

      formData.append("photo", photo[0]);
      formData.append("type", type);

      profilePictureMutation.mutate(formData);
      reset();
   }
* */