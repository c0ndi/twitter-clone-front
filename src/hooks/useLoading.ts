import {useEffect, useState} from "react";

export const useLoading = (isAuth: boolean) => {
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const timeout = setTimeout(() => {
         if(!isAuth) {
            setIsLoading(false);
         }
      }, 1000);

      () => {
         clearTimeout(timeout);
      }
   }, [isAuth])

   return isLoading;
}