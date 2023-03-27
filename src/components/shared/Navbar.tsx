import {useAuth} from "@/hooks/useAuth";
import {useLoading} from "@/hooks/useLoading";
import {TUser} from "@/types/types";
import Link from "next/link";
import Loading from "./Loading";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/utils/auth/logout";
import { useRouter } from "next/router";

export default function Navbar() {
   const router = useRouter();
   const {isAuth, user} = useAuth();
   const isLoading = useLoading(isAuth);

   const {name, profilePicture} = user as TUser;

   // !todo
   // - fix user fetching

   const logoutMutation = useMutation({
      mutationFn: () => logout(),
      onError: (_data, error) => {
         console.log(error)
      },
      onSuccess: () => {
         router.push("/login");
      },
   })

   if(router.pathname === "/login" || router.pathname === "/register") {
      return <></>;
   }

   if(isLoading) {
      return <Loading />
   }

   return (
      <nav className="rounded-lg mb-10 navbar bg-base-100 max-w-[720px] mx-auto">
         <div className="flex-1">
            <Link passHref href={"/posts"} className="btn btn-ghost normal-case text-xl">twitter-clone</Link>
         </div>
         <div className="flex-none">
            <div className="dropdown dropdown-end">
               <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar"
               >
                  <div className="w-10 rounded-full">
                     {profilePicture ?
                        <Image
                           src={profilePicture}
                           alt={"Profile picture"}
                           width={56}
                           height={56}
                           className={"rounded-full"}
                        />
                        :
                        <div className={"bg-secondary flex justify-center items-center text-lg w-10 h-10 text-white rounded-full"}>
                           <p className={"uppercase font-semibold"}>{name.split("")[0]}</p>
                        </div>
                     }
                  </div>
               </label>
               <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
               >
                  <li>
                     <Link
                        href={"/user"}
                        passHref
                        className="justify-between"
                     >
                        Profile
                        <span className="badge">New</span>
                     </Link>
                  </li>
                  {/*<li><a>Settings</a></li>*/}
                  <li onClick={() => logoutMutation.mutate()}><a>Logout</a></li>
               </ul>
            </div>
         </div>
      </nav>
   )
}