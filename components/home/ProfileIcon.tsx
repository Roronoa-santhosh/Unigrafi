
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import authAction from "@/actions/authAction";
import {auth} from '@/auth';


async function ProfileIcon() {

   const session = await auth();
   
   if(!session){
    return (
      <div>
       <form action={authAction}>
        <button type = "submit" >
        singn in
      </button>
        </form>

      </div>
    )
   }

  return (
    <div>
      <Avatar size="lg" className="mr-3">
      <AvatarImage
        src={session.user?.image || ""}
        alt="@shadcn"
      />
      <AvatarFallback>  {session.user?.name?.charAt(0) ?? "U"}</AvatarFallback>
    </Avatar>

   
    </div>
  )
}

export default ProfileIcon
