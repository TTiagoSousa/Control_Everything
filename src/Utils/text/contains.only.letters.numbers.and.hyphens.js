import { z } from "zod";

export function containsOnlyLettersNumbersAndHyphens(str) {
  const stringSchema = z.string();
  const zodResult = stringSchema.safeParse(str);

  if (!zodResult.success) {
    return false;
  }

  // Using a custom check to see if the string contains only letters, numbers, or hyphens
  const lettersNumbersAndHyphensOnly = str.split(' ').every(word => /^[a-zA-Z0-9-]+$/.test(word));

  if (!lettersNumbersAndHyphensOnly) {
    return false;
  }

  // Further validate with regex to ensure no other characters are included
  const regex = /^[a-zA-Z0-9\s-]+$/;
  return regex.test(str);
}