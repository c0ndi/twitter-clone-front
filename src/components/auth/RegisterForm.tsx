import {TInputsRegister} from "@/types/types";
import {registerUser} from "@/utils/auth/registerUser";
import Link from "next/link";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";

export default function RegisterForm() {
   const router = useRouter();
   const {register, handleSubmit, watch, formState: {errors}} = useForm<TInputsRegister>();
   const onSubmit = async (data: TInputsRegister) => {
      const res = await registerUser(data);

      if (res.status == 200) {
         router.push('/login')
      }

      if (res.status == 409) {
         console.log(await res.json());
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
                  <span className="label-text">Name</span>
               </label>
               <input {...register("name", {required: true})} className={"input input-bordered"}/>
            </div>
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
               <input
                  {...register("password", {required: true})}
                  className={"input input-bordered"}
               />
            </div>

            <div className={"form-control"}>
               <label className="label">
                  <span className="label-text">Confirm password</span>
               </label>
               <input
                  className={"input input-bordered"}
                  {...register(
                  "confirm_password",
                  {
                     required: true,
                     validate: (val: string) => {
                        if (watch('password') != val) {
                           return "Your passwords do no match";
                        }
                     },
                  })} />
            </div>

            <div className="form-control mt-6">
               <button
                  className="btn btn-primary"
                  type={"submit"}
               >Register
               </button>
            </div>

            <p className={"text-center font-medium"}>
               Already have account? Login&nbsp;
               <Link
                  href={"/login"}
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