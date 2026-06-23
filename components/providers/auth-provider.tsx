

'use client'

import {
  createContext,
  useContext,
  useState,
} from "react"

import LoginDialog from "@/components/auth/loginForm"

type AuthContextType = {
  openLogin: () => void
  closeLogin: () => void
}
const AuthContext =
  createContext<AuthContextType | null>(null)

export function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  const openLogin = () => {
    setOpen(true)
  }

  const closeLogin = () => {
    setOpen(false)
  }

  return (
    <AuthContext.Provider
      value={{
        openLogin,
        closeLogin,
      }}
    >
      {children}

      <LoginDialog
        open={open}
        setOpen={setOpen}
      />
    </AuthContext.Provider>
  )
}

export function useAuthDialog() {
  const context =
    useContext(AuthContext)

  if (!context) {
    throw new Error(
      "useAuthDialog must be used inside AuthProvider"
    )
  }

  return context
}