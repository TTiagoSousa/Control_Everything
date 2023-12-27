import { z } from "zod";

export function containsOnlyLetters(str: string): boolean {
  const stringSchema = z.string();

  const zodResult = stringSchema.safeParse(str);

  if (!zodResult.success) {
    return false;
  }

  const regex = /^[a-zA-Z\s]+$/;

  return regex.test(str);
}