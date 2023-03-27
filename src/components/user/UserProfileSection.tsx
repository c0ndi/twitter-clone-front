import { TUser } from "@/types/types";
import BackgroundPicture from "./BackgroundPicture";
import PhotoModal from "../shared/PhotoModal";
import ProfilePicture from "./ProfilePicture";

type TUserProfileSection = {
   user: TUser;
}

export default function UserProfileSection({user}: TUserProfileSection) {
   return (
      <>
         {user.backgroundPicture &&
            <PhotoModal elementUrl={user.backgroundPicture}>
               <BackgroundPicture photo={user.backgroundPicture}/>
            </PhotoModal>
         }

         <div className={`${user.backgroundPicture ? "-translate-y-[75px]" : "pt-10"} flex items-center gap-4`}>
            <ProfilePicture
               photo={user.profilePicture}
               name={user.name}
            />

            <p className={"text-3xl text-medium"}>
               {user.name}
            </p>
         </div>
      </>
   )
}