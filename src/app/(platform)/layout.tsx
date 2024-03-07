import { ModalProvider } from "@/components/providers/modalProvider";
import { QueryProvider } from "@/components/providers/queryProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ContextWrapper } from "../context/contextWrapper";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContextWrapper>
      <ClerkProvider>
        <QueryProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </QueryProvider>
      </ClerkProvider>
    </ContextWrapper>
  );
};

export default PlatformLayout;
