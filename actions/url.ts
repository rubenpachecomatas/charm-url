"use server";

import { createUrl, getUrlById } from "@/lib/url-service";

export const onCreateUrl = async (origin: string) => {
  let url;

  try {
    url = await createUrl(origin);
  } catch (error) {
    throw new Error("Something went wrong");
  }

  return url;
};

export const onRedirectToUrl = async (id: string) => {
  let url;

  try {
    url = await getUrlById(id);
  } catch (error) {
    throw new Error("Something went wrong");
  }

  if (url) {
    return url;
  } else {
    throw new Error("Url not found");
  }
};
