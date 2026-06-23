
'use client'
import{
    createContext,
    useContext,
}from "react"
import {Session} from "next-auth"


const SessionContext = createContext<Session | null>(null);

export async  function useSession({children ,session}:{children:React.ReactNode , session:Session | null}){

  

    return <SessionContext.Provider value= {session}>{children}</SessionContext.Provider>

}

export function useSessionContext() {
  return useContext(SessionContext)
}