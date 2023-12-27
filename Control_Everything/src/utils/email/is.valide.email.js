import { z } from "zod";

export const validateEmail = (email) => {

  const emailSchema = z.string().email();

  const zodResult = emailSchema.safeParse(email);

  if (!zodResult.success) {
    return false;
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
  return regex.test(email);
};
