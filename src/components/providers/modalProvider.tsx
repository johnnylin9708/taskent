"use client";

import { useEffect, useState } from "react";
import { CardModal } from "@/components/modal/cardModal";
import { ProModal } from "../modal/proModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
};
