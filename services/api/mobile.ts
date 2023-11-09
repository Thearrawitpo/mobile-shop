import { request } from "@/services/request";

export interface MobileType {
  id?: string;
  model: string;
  storage: number;
  brand: string;
  price: number;
  imageUrl: string;
  quality: string;
}

const subUrl = "/mobile";

export const getMobile = async (params: string) => {
  const url = `${subUrl}/?${params}`;
  try {
    const data = await request({
      method: "get",
      url: url,
    });
    return data;
  } catch {
    return null;
  }
};

export const postMobile = async (body: MobileType) => {
  const url = subUrl;
  try {
    const data = await request({
      method: "post",
      url: url,
      body: JSON.stringify(body),
    });
    return data;
  } catch {
    return null;
  }
};

export const deleteMobileById = async (id: string) => {
  const url = `${subUrl}/${id}`;
  try {
    const data = await request({
      method: "delete",
      url: url,
    });
    return data;
  } catch {
    return null;
  }
};

export const getMobileById = async (id: string) => {
  const url = `${subUrl}/${id}`;
  try {
    const data = await request({
      method: "get",
      url: url,
    });
    return data;
  } catch {
    return null;
  }
};

export const patchMobileById = async (id: string, body: MobileType) => {
  const url = `${subUrl}/${id}`;
  try {
    const data = await request({
      method: "patch",
      url: url,
      body: JSON.stringify(body),
    });
    return data;
  } catch {
    return null;
  }
};
