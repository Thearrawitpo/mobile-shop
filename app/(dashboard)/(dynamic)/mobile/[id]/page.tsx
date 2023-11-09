"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MobileType, getMobileById } from "@/services/api/mobile";

type MobilePageProps = {
  params: { id: string };
};

export default function MobilePage({ params }: MobilePageProps) {
  const [mobile, setMobile] = useState<MobileType>();

  useEffect(() => {
    const fetchData = async () => {
      const mobile = await getMobileById(params.id);
      setMobile(mobile);
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col gap-4 justify-center'>
      <div className='flex flex-col w-full'>
        {!!mobile?.imageUrl && (
          <div className='h-96 w-full relative'>
            <Image
              src={mobile.imageUrl}
              alt='banner'
              fill
              className='object-cover'
            />
          </div>
        )}
      </div>
      <div className='flex flex-col p-4 text-sm'>
        <label>แบรนด์ : {mobile?.brand}</label>
        <label>รุ่น : {mobile?.model}</label>
        <label>ความจุ : {mobile?.storage} GB</label>
        <label>คุณภาพ : {mobile?.quality}</label>
        <label>ราคา : {mobile?.price}</label>
      </div>
    </div>
  );
}
