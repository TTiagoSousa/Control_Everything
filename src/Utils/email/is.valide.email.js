import { z } from "zod";

export const validateEmail = (email) => {
  
  // Create an email validation schema using Zod
  const emailSchema = z.string().email();

  // Validate the email against the schema
  const zodResult = emailSchema.safeParse(email);

  // If validation fails, return false
  if (!zodResult.success) {
    return false;
  }

  // Regular expression to check if the email format is correct
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression and return the result
  return regex.test(email);
};