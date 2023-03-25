import Loading from "@/components/shared/Loading";
import BackgroundPicture from "@/components/user/BackgroundPicture";
import ProfilePicture from "@/components/user/ProfilePicture";
import {useAuth} from "@/hooks/useAuth";
import {useLoading} from "@/hooks/useLoading";
import {addUserPicture} from "@/utils/user/addUserPicture";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";

export default function Page() {
   const {isAuth, user} = useAuth();
   const loading = useLoading(isAuth);

   const queryClient = useQueryClient();

   const profilePictureMutation = useMutation({
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

   if (loading) {
      return <Loading/>
   }

   return (
      <main className={"max-w-[720px] mx-auto"}>
         <BackgroundPicture photo={user.backgroundPicture} />

         <div className={"-translate-y-[25px] px-6 flex items-center gap-4"}>
            <ProfilePicture
               photo={user.profilePicture}
               name={user.name}
            />

            <p className={"text-3xl text-medium"}>
               {user.name}
            </p>
         </div>

      </main>
   )
}