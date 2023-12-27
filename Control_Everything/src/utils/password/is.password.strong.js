import { z } from "zod";

export const isPasswordStrong = (password) => {

  const passwordSchema = z
  .string()
  .min(6)
  .refine((password) => /[A-Z]/.test(password))
  .refine((password) => /[0-9]/.test(password))
  .refine((password) => /[^A-Za-z0-9]/.test(password))

  const zodResult = passwordSchema.safeParse(password);

  if (!zodResult.success) {
    return false;
  }

  const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;

  return passwordRegex.test(password);
}