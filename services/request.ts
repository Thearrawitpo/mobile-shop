import toast from "react-hot-toast";
import axios from "axios";

interface RequestType {
  method: string;
  url: string;
  body?: string | FormData;
  contentType?: string;
  isToast?: boolean;
}

export const request = async ({
  method,
  url,
  body,
  contentType = "application/json",
  isToast = true,
}: RequestType) => {
  const tokens = { accessToken: "" };

  const path = "/api";

  const headers = !!tokens
    ? {
        "Content-Type": contentType,
        Authorization: "Bearer " + String(tokens.accessToken),
      }
    : {
        "Content-Type": contentType,
      };

  const handleGetDelete = async () => {
    try {
      const res = await axios({
        method: method,
        url: `${path}${url}`,
        headers: headers,
      });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || error.message);
      } else {
        console.error(error);
      }
    }
  };

  const handlePostPatch = async () => {
    try {
      const res = await axios({
        method: method,
        url: `${path}${url}`,
        headers: headers,
        data: body,
      });
      isToast && toast.success("Success");
      return res.data || null;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || error.message);
      } else {
        console.error(error);
      }
    }
  };

  switch (method) {
    case "get": {
      const data = await handleGetDelete();
      return data;
    }
    case "delete": {
      const data = await handleGetDelete();
      return data;
    }
    case "post": {
      const data = await handlePostPatch();
      return data;
    }
    case "patch": {
      const data = await handlePostPatch();
      return data;
    }
  }

  return null;
};
