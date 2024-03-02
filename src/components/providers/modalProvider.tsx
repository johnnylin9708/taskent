"use client";

import { useEffect, useState } from "react";
import { CardModal } from "@/components/modal/cardModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return <CardModal />;
};
