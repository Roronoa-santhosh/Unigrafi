// components/auth/login-dialog.tsx

'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import authAction from "@/actions/authAction"
import { FcGoogle } from "react-icons/fc";

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}


export default function LoginDialog({ open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="
        max-w-sm rounded-2xl p-8
        bg-white dark:bg-bg-dsurf
        border border-bg-border dark:border-bg-dborder
      ">

        {/* Logo */}
        <h2 className="text-2xl font-display font-bold text-accent text-center">
          Unigrafi
        </h2>
        <p className="text-ink-muted text-center text-sm mt-1 mb-8">
          Sign in to continue
        </p>

        {/* Google Button */}
        <form action={authAction}>
        <button
          type="submit"
          className="
            w-full flex items-center justify-center gap-3
            py-3 px-4 rounded-xl
            border border-bg-border dark:border-bg-dborder
            text-ink-primary dark:text-ink-invert
            font-medium text-sm
            hover:bg-bg-hover dark:hover:bg-bg-dhover
            transition-colors
          "
        >
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </button>
        </form>

        <p className="text-center text-xs text-ink-muted mt-6">
          By continuing you agree to our Terms and Privacy Policy
        </p>

      </DialogContent>
    </Dialog>
  )
}

