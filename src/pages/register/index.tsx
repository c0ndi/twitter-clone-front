import Register from "@/components/auth/Register";
import {useAuth} from "@/hooks/useAuth";
import {useLoading} from "@/hooks/useLoading";
import {useEffect, useState} from "react";

export default function Page() {
   return (
      <div>
         <h1>Register</h1>
         <Register/>
      </div>
   )
}