import { z } from 'zod';
import validator from 'validator';

export function isValidEmail(email: string): boolean {
  const EmailSchemaZod = z.string().email();

  const zodResult = EmailSchemaZod.safeParse(email);

  if (!zodResult.success) {
    return false;
  }

  if (!validator.isEmail(email)) {
    return false;
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}