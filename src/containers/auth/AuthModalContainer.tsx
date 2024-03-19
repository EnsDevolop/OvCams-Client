import React from "react"

import AuthModal from "@/components/auth/AuthModal"
import AuthForm from "@/components/auth/AuthForm"
import { useAuthModalStore } from "@/libs/layouts/providers/AuthModalStoreContextProvider"

export default function AuthModalContainer() {
  const { visible, closeModal } = useAuthModalStore((state) => state)
  return (
    <AuthModal onClose={closeModal} visible={visible}>
      <AuthForm />
    </AuthModal>
  )
}
