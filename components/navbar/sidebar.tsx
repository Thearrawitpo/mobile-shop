"use client";
import React, { useEffect } from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import useSidebar from "@/hooks/use-sidebar";
// import { useUser } from "@/hooks/use-user";
import Login from "./login";
import Menu from "./menu";
import { usePathname } from "next/navigation";

type SidebarProps = {};

export default function Sidebar({}: SidebarProps) {
  // const { user } = useUser();
  const user = true;
  const pathname = usePathname();
  const sidebar = useSidebar();
  const onChange = (open: boolean) => {
    if (!open) {
      sidebar.onClose();
    }
  };
  useEffect(() => {
    sidebar.onClose();
  }, [pathname]);
  return (
    <div>
      <Sheet open={sidebar.isOpen} onOpenChange={onChange}>
        <SheetContent className='overflow-auto'>
          <SheetHeader>
            <div className='font-medium py-2'>
              {!!user ? <Menu /> : <Login />}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
