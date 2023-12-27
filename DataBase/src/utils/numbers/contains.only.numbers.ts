import { z } from "zod";

export function containsOnlyNumber(str: string): boolean {

  const numericStringSchema = z.string();

  const zodResult = numericStringSchema.safeParse(str);
  if (!zodResult.success) {
    return false;
  }

  const regex = /^-?\d+(\.\d+)?$/;
  return regex.test(str);
}