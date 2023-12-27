import { z } from "zod";

export function containsOnlyLettersAndNumbers(str: string): boolean {
  const stringSchema = z.string();

  const zodResult = stringSchema.safeParse(str);

  if (!zodResult.success) {
    return false;
  }

  // Updated regex to include numbers
  const regex = /^[a-zA-Z0-9\s]+$/;

  return regex.test(str);
}