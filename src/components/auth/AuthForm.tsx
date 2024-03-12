import { useInput } from "@/libs/hooks";
import React from "react";

export default function AuthComponents({ onSendAuthEmail }: any) {
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
}
