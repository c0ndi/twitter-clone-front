import Image from "next/image";

type TPhotoModal = {
   children: JSX.Element,
   elementUrl: string | undefined;
}

export default function PhotoModal({children, elementUrl}: TPhotoModal) {
   return (
      <>
         <label
            htmlFor={`my-modal-${elementUrl}`}
            className={"mb-4 relative h-[404px] block"}
         >
            {children}
         </label>

         <input
            type="checkbox"
            id={`my-modal-${elementUrl}`}
            className="modal-toggle"
         />
         <label
            htmlFor={`my-modal-${elementUrl}`}
            className="modal cursor-pointer"
         >
            <div className="modal-box w-[100vw] relative">
               <Image
                  src={elementUrl ?? ""}
                  alt={"Photo"}
                  width={800}
                  height={600}
                  className={"rounded-lg"}
               />
               <div className="modal-action">
                  <label
                     htmlFor={`my-modal-${elementUrl}`}
                     className="btn"
                  >
                     Ok
                  </label>
               </div>
            </div>
         </label>
      </>
   )
}