import { TInputsLogin } from "@/types/types";
import { isLogIn } from "@/utils/auth/isLogIn";
import { loginUser } from "@/utils/auth/loginUser";
import {registerUser} from "@/utils/auth/registerUser";
import { useRouter } from "next/router";
import {useForm} from "react-hook-form";


export default function Login() {
   const router = useRouter();
   const {register, handleSubmit, watch, formState: {errors}} = useForm<TInputsLogin>();
   const onSubmit = async (data: TInputsLogin) => {
      const res = await loginUser(data);

      if(res.status === 200) {
         router.push('/')
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("email", {required: true})} />
         <input {...register("password", {required: true})} />
         <input type="submit"/>
      </form>
   )
}