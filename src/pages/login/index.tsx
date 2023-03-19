import Login from "@/components/auth/Login";
import {useAuth} from "@/hooks/useAuth";
import {useLoading} from "@/hooks/useLoading";
import {isLogIn} from "@/utils/auth/isLogIn";
import {useEffect, useState} from "react";

export default function Page() {
   const {isAuth, user} = useAuth("auth");
   const isLoading = useLoading(isAuth);

   if (isLoading) {
      return <p>Loading...</p>
   }

   return (
      <div>
         <h1>Login</h1>
         <Login/>
      </div>
   )
}