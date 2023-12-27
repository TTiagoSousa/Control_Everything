import { z } from "zod";

export function isValidHour(str: string): boolean {
  const stringSchema = z.string();

  const zodResult = stringSchema.safeParse(str);

  if (!zodResult.success) {
    return false;
  }

  // Regex for HH:mm format
  const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

  return regex.test(str);
}