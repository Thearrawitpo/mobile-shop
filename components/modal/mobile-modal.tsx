"use client";
import React, { useEffect, useState } from "react";
import Modal from "../ui/modal";
import InputBox from "@/components/ui-components/input-box";
import { Button } from "../ui/button";
import useMobileModal from "@/hooks/use-mobile-modal";
import { patchMobileById, postMobile } from "@/services/api/mobile";

type Props = {};

export default function MobileModal({}: Props) {
  const { isOpen, onClose, data } = useMobileModal();
  const [model, setModel] = useState<string>();
  const [storage, setStorage] = useState<number>();
  const [brand, setBrand] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>();
  const [quality, setQuality] = useState<string>();
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    if (!!data) {
      setModel(data.model);
      setStorage(data.storage);
      setBrand(data.brand);
      setImageUrl(data.imageUrl);
      setQuality(data.quality);
      setPrice(data.price);
    }
  }, [data]);

  useEffect(() => {
    if (!isOpen) {
      setModel(undefined);
      setStorage(undefined);
      setBrand(undefined);
      setImageUrl(undefined);
      setQuality(undefined);
      setPrice(undefined);
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!!data && !!data.id) {
      const res = await patchMobileById(data.id, {
        model: model || "",
        storage: Number(storage) || NaN,
        brand: brand || "",
        imageUrl: imageUrl || "",
        quality: quality || "",
        price: Number(price) || NaN,
      });
      if (!!res) {
        onClose();
      }
    } else {
      if (
        !!model &&
        !!storage &&
        !!brand &&
        !!imageUrl &&
        !!quality &&
        !!price
      ) {
        const res = await postMobile({
          model: model,
          storage: Number(storage),
          brand: brand,
          imageUrl: imageUrl,
          quality: quality,
          price: Number(price),
        });
        if (!!res) {
          onClose();
        }
      }
    }
  };

  return (
    <Modal
      title='Group management'
      description='You can edit any group here'
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className='flex flex-col gap-4'>
          <InputBox label='Model' setState={setModel} value={model} />
          <InputBox
            label='Storage'
            type='number'
            setState={setStorage}
            value={storage}
          />
          <InputBox label='Model' setState={setBrand} value={brand} />
          <InputBox label='ImageUrl' setState={setImageUrl} value={imageUrl} />
          <InputBox label='Quality' setState={setQuality} value={quality} />
          <InputBox
            label='Price'
            type='number'
            setState={setPrice}
            value={price}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
        {/* )} */}
      </div>
    </Modal>
  );
}
