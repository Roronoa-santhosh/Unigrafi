'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,

} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import {useAuthDialog} from '@/components/providers/auth-provider';
import { Session } from "next-auth"



 function ProfileIcon({
  session,
}: {
  session:  Session | null
}){
  const {openLogin} = useAuthDialog();

   
   if(!session){
    return (
      <div>
       
        <Button onClick={openLogin} className="p-3 px-5 ">Login</Button>
        
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
