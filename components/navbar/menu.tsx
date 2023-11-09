"use client";
import React from "react";
import User from "./user";
import { Button } from "@/components/ui/button";
import LabelMenu from "./label-menu";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className='flex flex-col gap-4 items-start'>
      <div className='flex items-center gap-2'>
        <Image src='/user.png' alt='user' width={40} height={40} />
        {session?.user?.name}
      </div>
      <LabelMenu path='/'>Home</LabelMenu>
      <LabelMenu path='/mobile-management'>Mobile Management</LabelMenu>
      <LabelMenu path='/contact-us'>Contact us</LabelMenu>
      <LabelMenu path='/term-and-conditions'>Term and conditions</LabelMenu>
      <div onClick={handleSignOut}>
        <LabelMenu path='#'>Log out</LabelMenu>
      </div>
      <Button className='text-white text-sm h-12 mt-12 w-full'>Contact</Button>
    </div>
  );
}
