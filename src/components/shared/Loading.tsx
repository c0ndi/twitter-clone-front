export default function Loading() {
   return (
      <div className={"h-screen w-full flex justify-center items-center"}>
         <div className={"flex flex-col gap-4"}>
            <p className={"text-3xl font-medium text-center"}>Wait...</p>
            <progress className="progress w-56"></progress>
         </div>
      </div>
   )
}