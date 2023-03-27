import {TInputsLogin} from "@/types/types";
import {isLogIn} from "@/utils/auth/isLogIn";
import {loginUser} from "@/utils/auth/loginUser";
import {registerUser} from "@/utils/auth/registerUser";
import Link from "next/link";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";

export default function LoginForm() {
   const router = useRouter();
   const {register, handleSubmit, watch, formState: {errors}} = useForm<TInputsLogin>();
   const onSubmit = async (data: TInputsLogin) => {
      const res = await loginUser(data);

      if (res.status === 200) {
         router.push('/')
      }
   }

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className="lg:w-1/2 card w-full shadow-2xl bg-base-100"
      >
         <div className="card-body">
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Email</span>
               </label>
               <input {...register("email", {required: true})} className={"input input-bordered"}/>
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Password</span>
               </label>
               <input {...register("password", {required: true})} className={"input input-bordered"}/>
            </div>
            <div className="form-control mt-6">
               <button
                  className="btn btn-primary"
                  type={"submit"}
               >Login
               </button>
            </div>

            <p className={"text-center font-medium"}>
               No account? Create one&nbsp;
               <Link
                  href={"/register"}
                  passHref
                  className={"text-primary"}
               >
                  here
               </Link>
            </p>
         </div>
      </form>
   )
}