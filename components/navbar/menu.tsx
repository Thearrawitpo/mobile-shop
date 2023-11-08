import React from "react";
import User from "./user";
import { Button } from "@/components/ui/button";
// import { useUser } from "@/hooks/use-user";
import LabelMenu from "./label-menu";

export default function Menu() {
  // const { logoutUser } = useUser();

  return (
    <div className='flex flex-col gap-4 items-start'>
      <User />
      <LabelMenu path='/'>Home</LabelMenu>
      <LabelMenu path='/edit-profile'>Edit profile</LabelMenu>
      <LabelMenu path='/contact-us'>Contact us</LabelMenu>
      <LabelMenu path='/term-and-conditions'>Term and conditions</LabelMenu>
      <div onClick={() => {}}>
        <LabelMenu path='#'>Log out</LabelMenu>
      </div>
      <Button className='text-white text-sm h-12 mt-12 w-full'>Contact</Button>
    </div>
  );
}
