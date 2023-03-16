import Register from "@/components/auth/Register";
import {useAuth} from "@/hooks/useAuth";
import { useLoading } from "@/hooks/useLoading";
import {useEffect, useState} from "react";

export default function Page() {
   const {isAuth, user} = useAuth("auth");
   const isLoading = useLoading(isAuth);

   if (isLoading) {
      return <p>Loading...</p>
   } else {
      return (
         <div>
            <h1>Register</h1>
            <Register/>
         </div>
      )
   }
}