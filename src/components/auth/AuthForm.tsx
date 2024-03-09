"use client";

import React from "react";
import { useInput } from "@/hooks";

export const AuthComponents = ({ onSendAuthEmail }: any) => {
  const [email, onEmailChange, _onReset] = useInput("");
  const onClick = () => {
    onSendAuthEmail(email);
  };

  return (
    <div>
      <input value={email} onChange={onEmailChange} />
      <button onClick={onClick}>wef</button>
    </div>
  );
};
