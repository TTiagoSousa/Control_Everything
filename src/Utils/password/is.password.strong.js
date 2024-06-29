import { z } from "zod";

export const isPasswordStrong = (password) => {
  
  // Create a password validation schema using Zod
  const passwordSchema = z
    .string() // The input must be a string
    .min(6) // The password must be at least 6 characters long
    .refine((password) => /[A-Z]/.test(password)) // The password must contain at least one uppercase letter
    .refine((password) => /[0-9]/.test(password)) // The password must contain at least one digit
    .refine((password) => /[^A-Za-z0-9]/.test(password)) // The password must contain at least one special character

  // Validate the password against the schema
  const zodResult = passwordSchema.safeParse(password);

  // If validation fails, return false
  if (!zodResult.success) {
    return false;
  }

  // Regular expression to check if the password meets the criteria
  const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;

  // Test the password against the regular expression and return the result
  return passwordRegex.test(password);
}