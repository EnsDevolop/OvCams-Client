import React, { useEffect, useState } from "react";
import Header from "./Header";
import styled from "@emotion/styled";

export default function FloatingHeader() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FloatingHeaderBlock style={{ height: visible ? "60px" : "0" }}>
      <Header />
    </FloatingHeaderBlock>
  );
}

const FloatingHeaderBlock = styled.div`
  width: 100%;
  background-color: black;
  top: 0;
  position: fixed;
  z-index: 20;
  overflow: hidden;
  transition: height 0.4s ease;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;
