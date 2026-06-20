'use server'

import { signIn } from "@/auth"

export default async function authAction() {
    await signIn()
   
    
}