import Image from 'next/image';

export default function BackgroundPicture({photo}: {photo: string | undefined}) {
   return (
      <div className={"w-full h-[40vh] relative"}>
         {photo &&
            <Image
               src={photo}
               alt={"Background picture"}
               layout={"fill"}
               className={"w-full h-full object-cover rounded-b-lg"}
            />
         }
      </div>
   )
}