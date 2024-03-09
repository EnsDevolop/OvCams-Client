"use client";

import React from "react";
import { useEmailMutation } from "@/apis/auth";
import { AuthComponents } from "@/components/auth/AuthForm";
import { useCallback } from "react";

export const AuthContainer = () => {
  const { data, mutate: emailMutate } = useEmailMutation();
  const onSendAuthEmail = useCallback((email: string) => {
    emailMutate({ email });
  }, []);

  return <AuthComponents onSendAuthEmail={onSendAuthEmail} />;
};
