"use client";
import React, { useEffect } from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function ProtectedRouteLayout({
  children,
}: DashboardLayoutProps) {
  return <div>{children}</div>;
}
