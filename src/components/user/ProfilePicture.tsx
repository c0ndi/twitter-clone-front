import Image from 'next/image'

type TProfileSection = {
   photo: string | undefined;
   name: string;
}

export default function ProfilePicture({photo, name}: TProfileSection) {
   return (
      <div className={"h-[125px] w-[125px] relative rounded-full flex justify-center items-center bg-secondary border-4 border-white"}>
         {photo ?
            <Image
               src={photo ?? ""}
               alt={"Profile picture"}
               layout={"fill"}
               className={"w-full h-full object-cover rounded-full"}
            />
            :
            <p className={"text-white text-5xl uppercase"}>{name.split("")[0]}</p>
         }
      </div>
   )
}