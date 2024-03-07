"use client";

import { useEffect, useState } from "react";
import { CardModal } from "@/components/modal/cardModal";
import { ProModal } from "@/components/modal/proModal";
import { FormCardModal } from "@/components/modal/formCardModal";

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
      <FormCardModal />
      <CardModal />
      <ProModal />
    </>
  );
};
