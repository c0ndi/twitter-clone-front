import { TInputsRegister } from "@/types/types";
import {registerUser} from "@/utils/auth/registerUser";
import { useRouter } from "next/router";
import {useForm} from "react-hook-form";



export default function Register() {
   const router = useRouter();
   const {register, handleSubmit, watch, formState: {errors}} = useForm<TInputsRegister>();
   const onSubmit = async (data: TInputsRegister) => {
      const res = await registerUser(data);

      if(res.status == 200) {
         router.push('/login')
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("name", {required: true})} />
         <input {...register("email", {required: true})} />
         <input {...register("password", {required: true})} />
         <input {...register(
            "confirm_password",
            {
               required: true,
               validate: (val: string) => {
                  if (watch('password') != val) {
                     return "Your passwords do no match";
                  }
               },
            })} />
         <input type="submit"/>
      </form>
   )
}