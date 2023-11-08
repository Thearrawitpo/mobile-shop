// import { useUser } from "@/hooks/use-user";
import Image from "next/image";
import React from "react";
import { AiOutlineCaretDown, AiFillCopyrightCircle } from "react-icons/ai";

type Props = {};

export default function User({}: Props) {
  // const { user } = useUser();
  return (
    <div className='my-8 flex gap-6'>
      <Image src='/user.png' alt='user' width={56} height={56} />
      <div className='grid gap-2'>
        <div className='flex gap-2 items-center text-primary text-base'>
          {/* <label>{user?.display_name}</label> */}
          <AiOutlineCaretDown />
        </div>
        <p className='flex gap-2 items-center text-sm text-neutral-700'>
          <span className='mr-4'>Normal</span>|
          {/* <span className='ml-4'>{user?.balance.toLocaleString("en-US")}</span> */}
          <AiFillCopyrightCircle className='text-primary' size={20} />
        </p>
      </div>
    </div>
  );
}
