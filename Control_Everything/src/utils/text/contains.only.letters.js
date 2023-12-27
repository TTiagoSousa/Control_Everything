import { z } from "zod";

export function containsOnlyLetters(string) {
  const stringSchema = z.string();

  const zodResult = stringSchema.safeParse(string);

  if (!zodResult.success) {
    return false;
  }

  const regex = /^[a-zA-Z\s]+$/;

  return regex.test(string);
}