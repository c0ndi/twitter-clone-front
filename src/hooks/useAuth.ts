import { TUser } from "@/types/types";
import { isLogIn } from "@/utils/auth/isLogIn";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";

export const useAuth = (pageType?: "auth") => {
   const router = useRouter();
   const [isAuth, setIsAuth] = useState<boolean>(false);
   const [user, setUser] = useState<TUser>({
      _id: "",
      name: "",
      email: "",
      created_at: "",
      likedPosts: [],
   });

   useEffect(() => {
      isLogIn()
         .then(async (res) => {
            if (pageType && res.status === 200) router.push('/posts')

            if (res.status === 200) {
               const {user} = await res.json();

               setUser(user);
               setIsAuth(true);

               return;
            }

            if(router.pathname !== '/login' && router.pathname !== '/register')
               router.push('/login')
         })
         .catch(err => console.log(err))
   }, [])

   return {
      isAuth,
      user
   };
}