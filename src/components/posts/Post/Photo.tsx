import Image from 'next/image'

export default function Photo({photo}: { photo: string }) {
   return (
      <>
         <label
            htmlFor="my-modal-4"
            className={"mb-4 relative h-[404px] block"}
         >
            <Image
               src={photo}
               alt={"Post photo"}
               layout={"fill"}
               className={"object-cover rounded-lg cursor-pointer"}
            />
         </label>

         <input
            type="checkbox"
            id="my-modal-4"
            className="modal-toggle"
         />
         <label
            htmlFor="my-modal-4"
            className="modal cursor-pointer"
         >
            <div className="modal-box w-[100vw] relative">
               <Image
                  src={photo}
                  alt={"Post photo"}
                  width={800}
                  height={600}
                  className={"rounded-lg"}
               />
               <div className="modal-action">
                  <label
                     htmlFor="my-modal-4"
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