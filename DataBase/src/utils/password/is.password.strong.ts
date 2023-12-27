import { z } from 'zod';

export function isStrongPassword(password: string): boolean {
  const passwordSchema = z
    .string()
    .min(6)
    .refine((password) => /[A-Z]/.test(password))
    .refine((password) => /[0-9]/.test(password))
    .refine((password) => /[^A-Za-z0-9]/.test(password))
    .refine((password) => /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(password));

  return passwordSchema.safeParse(password).success;
}