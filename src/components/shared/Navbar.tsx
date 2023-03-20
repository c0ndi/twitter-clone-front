import { TUser } from "@/types/types";

export default function Navbar({}) {
   return (
      <div className="navbar bg-base-100">
         <div className="flex-1">
            <div className="font-semibold font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
               <span className="lowercase text-primary">little</span>
               <span className="text-base-content">Twitter</span>
            </div>
         </div>

         <div className="flex-none">
            <button className="btn btn-square btn-ghost">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
               </svg>
            </button>
         </div>
      </div>
   )
}