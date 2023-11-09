"use client";
import { MobileType, getMobile } from "@/services/api/mobile";
import Card from "./card";
import { useEffect, useState } from "react";
import useFilter from "@/hooks/use-filter";

export default function ListCard() {
  const filter = useFilter();
  const [mobiles, setMobiles] = useState<MobileType[]>();
  useEffect(() => {
    const fetchData = async () => {
      const params = `model=${!!filter.model ? filter.model : ""}&storage=${
        !!filter.storage ? filter.storage : ""
      }`;
      const mobiles = await getMobile(params);
      setMobiles(mobiles);
    };
    fetchData();
  }, [filter.model, filter.storage]);
  return (
    <div
      className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 2xl:grid-cols-5
     justify-items-center mb-4'
    >
      {mobiles?.map((item) => {
        return <Card content={item} key={item.id} />;
      })}
    </div>
  );
}
