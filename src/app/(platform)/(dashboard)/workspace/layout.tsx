"use client";

import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  const [isHiddenSideBar, setIsHiddenSideBar] = useState(false);
  const handleHideSideBar = () => {
    setIsHiddenSideBar(!isHiddenSideBar);
  };

  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl-mx-auto">
      <div className="flex gap-x-7">
        <div
          className={`w-64 shrink-0 hidden md:${
            isHiddenSideBar ? "hidden" : "block"
          }`}
        >
          <Sidebar handleHideSideBar={handleHideSideBar} />
        </div>
        {isHiddenSideBar && (
          <div
            className={`mb-3 hidden md:${isHiddenSideBar ? "block" : "hidden"}`}
          >
            <Button className="p-2" variant="ghost" onClick={handleHideSideBar}>
              <ChevronRight />
            </Button>
          </div>
        )}
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
