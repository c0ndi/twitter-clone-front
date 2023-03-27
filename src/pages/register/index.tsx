import RegisterForm from "@/components/auth/RegisterForm";
import Loading from "@/components/shared/Loading";
import { useAuth } from "@/hooks/useAuth";
import { useLoading } from "@/hooks/useLoading";

export default function Page() {
   const {isAuth, user} = useAuth("auth");
   const isLoading = useLoading(isAuth);

   if (isLoading) {
      return <Loading />
   }

   return (
      <main className="flex gap-12 flex-col px-6 h-screen w-[1280px] mx-auto items-center justify-center lg:flex-row-reverse">
         <div className="lg:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
            <p className={"py-6"}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
         </div>

         <RegisterForm/>
      </main>
   )
}