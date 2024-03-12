"use client";

import React from "react";
import { useEmailMutation } from "@/apis/auth";
import { useCallback } from "react";
import AuthComponents from "@/components/auth/AuthForm";

export default function AuthContainer() {
  const { data, mutate: emailMutate } = useEmailMutation();
  const onSendAuthEmail = useCallback((email: string) => {
    emailMutate({ email });
  }, []);

  return <AuthComponents onSendAuthEmail={onSendAuthEmail} />;
}
