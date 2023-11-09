import { request } from "@/services/request";

export interface FilterType {
  models: ModelFilterType[];
  storages: StorageFilterType[];
}
export interface ModelFilterType {
  model: string;
}
export interface StorageFilterType {
  storage: string;
}

const subUrl = "/filter";

export const getFilter = async () => {
  const url = subUrl;
  try {
    const data: FilterType = await request({
      method: "get",
      url: url,
    });
    return data;
  } catch {
    return null;
  }
};
