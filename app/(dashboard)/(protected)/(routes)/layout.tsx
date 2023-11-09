"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function ProtectedRouteLayout({
  children,
}: DashboardLayoutProps) {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
    if (!!session) {
      if (!!!session.user) {
        router.push("/");
      }
    }
  }, [session, router]);

  return <div>{children}</div>;
}
