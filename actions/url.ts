"use server";

import { createUrl } from "@/lib/url-service";

export const onCreateUrl = async (origin: string) => {
  let url;
  try {
    url = await createUrl(origin);
  } catch (error) {
    throw new Error("Something went wrong");
  }

  return url;
};
