"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFilter from "@/hooks/use-filter";
import {
  ModelFilterType,
  StorageFilterType,
  getFilter,
} from "@/services/api/filter";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Filter({}: Props) {
  const filter = useFilter();
  const [models, setModels] = useState<ModelFilterType[]>();
  const [storages, setStorages] = useState<StorageFilterType[]>();

  useEffect(() => {
    const fetchData = async () => {
      const filter = await getFilter();
      setModels(filter?.models);
      setStorages(filter?.storages);
    };
    fetchData();
  }, []);

  return (
    <div className='flex gap-4 my-4'>
      <div className='flex flex-col gap-2 text-xs font-light w-full'>
        <label>Model</label>
        <Select
          onValueChange={(value) => filter.setModel(value)}
          value={filter.model}
        >
          <SelectTrigger className='w-full h-12'>
            <SelectValue placeholder='Model' />
          </SelectTrigger>
          <SelectContent className='max-h-48 overflow-y-scroll'>
            {models?.map((item) => (
              <SelectItem value={item.model} key={item.model}>
                {item.model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className='flex flex-col gap-2 text-xs font-light w-full'>
        <label>Storage</label>
        <Select
          onValueChange={(value) => filter.setStorage(value)}
          value={filter.storage}
        >
          <SelectTrigger className='w-full h-12'>
            <SelectValue placeholder='Storage' />
          </SelectTrigger>
          <SelectContent className='max-h-48 overflow-y-scroll'>
            {storages?.map((item) => (
              <SelectItem value={item.storage} key={item.storage}>
                {item.storage} GB
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
