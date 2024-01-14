import { db } from "./db";
import { generateRandomString } from "./utils";

export const createUrl = async (origin: string) => {
  let url;

  try {
    url = await db.url.create({
      data: {
        url: generateRandomString(),
        origin,
      },
    });
  } catch (error) {
    throw new Error("Something went wrong");
  }

  return url;
};
