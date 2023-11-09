/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MobileType } from "@/services/api/mobile";

type CardProps = {
  content: MobileType;
};

export default function Card({ content }: CardProps) {
  const router = useRouter();

  return (
    <div
      className={`content-center cursor-pointer ${"w-full h-[311px] relative"}`}
    >
      <div>
        <Image
          src={content?.imageUrl}
          alt='idol'
          className='rounded-md object-cover'
          fill
          sizes='auto'
          onClick={() => router.push(`/mobile/${content.id}`)}
        />

        <div className='absolute flex flex-col gap-2 left-2 bottom-2 w-[90%]'>
          <div className='flex items-center gap-2'>
            <label className='text-white flex gap-2 '>
              {content.brand}
              <p className='truncate max-w-[calc(50vw-110px)] sm:max-w-[200px]'>
                {content.model}
              </p>
            </label>
          </div>
          <div className='flex items-center justify-between'>
            <label className='text-white text-sm'>
              ความจุ {content.storage} GB
            </label>
            <label className='text-white text-sm'>
              คุณภาพ {content.quality}
            </label>
          </div>
          <div>
            <label className='text-white'>
              {content.price.toLocaleString("en-US")}
              {" B"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
