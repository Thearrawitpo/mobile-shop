"use client";

import { Toaster } from "react-hot-toast";

import React from "react";

type Props = {};

export default function ToasterProvider({}: Props) {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#fff",
          color: "#514FD2",
        },
      }}
    />
  );
}
