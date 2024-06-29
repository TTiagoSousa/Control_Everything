import { z } from "zod";

// Function that checks if a string contains only letters and spaces
export function containsOnlyLetters(string) {
  // Create a string validation schema using Zod
  const stringSchema = z.string();

  // Validate the input string against the schema
  const zodResult = stringSchema.safeParse(string);

  // If validation fails, return false
  if (!zodResult.success) {
    return false;
  }

  // Regular expression to check if the string contains only letters (a-z, A-Z) and spaces
  const regex = /^[a-zA-Z\s]+$/;

  // Test the string against the regular expression and return the result
  return regex.test(string);
}