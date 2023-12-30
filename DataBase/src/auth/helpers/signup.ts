import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { signup_dto } from "src/user/dto/signup.dto";
import { getCountriesFromDatabase } from "src/countries/helpers/get.countries.from.data";
import * as Signup_Error from '../../user/errors/signup.function.errors';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/email/email.service';
import { 
  hashPassword, 
  isValidEmail, 
  containsOnlyLetters, 
  calculateUserAge, 
  isStrongPassword 
} from "src/utils/all.utilis";
import { sendActivationEmail } from "./send.activation.email";
import { UserSettingsService } from "src/user-settings/user-settings.service";
import { createUserSettings } from "src/user-settings/helpers/create.user.settings";

export async function Signup (
  dto: signup_dto,
  jwt: JwtService,
  emailService: EmailService,
  userSettingsService: UserSettingsService,
) {

  const usersRepository = new PrismaUsersRepository();
  
  const { email, password, fullName, confirmPassword, dateOfBirth, country, gender } = dto;

  const activationToken = jwt.sign({ email }, { expiresIn: '1d' });

  const foundUser = await usersRepository.findByEmail(email);
  if (foundUser) {
    throw new Signup_Error.Email_Already_Exists();
  }

  if (!isValidEmail(email)) {
    throw new Signup_Error.Email_is_Not_Valid();
  }

  if (password !== confirmPassword) {
    throw new Signup_Error.Passwords_Do_Not_Match();
  }

  if (!isStrongPassword(password)) {
    throw new Signup_Error.Weak_Passowrd();
  }

  const userAge = calculateUserAge(new Date(dateOfBirth));
  const minimumAge = 16;
  if (userAge < minimumAge) {
    throw new Signup_Error.Minimum_Age();
  }

  const hashedPassword = await hashPassword(password);

  const capitalizedFullName = fullName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  if(!containsOnlyLetters(capitalizedFullName)) {
    throw new Signup_Error.Invalid_Full_Name();
  }

  const coutries = await getCountriesFromDatabase();
  const requestedCountry = coutries.find(c => c.countryName === dto.country);

  if (!requestedCountry) {
    throw new Signup_Error.Invalid_Country();
  }

  await sendActivationEmail(email, activationToken, fullName, emailService);

  const creationResult = await usersRepository.create({
    email: email,
    fullName: capitalizedFullName,
    dateOfBirth,
    country: requestedCountry.countryName,
    hashedPassword: hashedPassword,
    gender,
  });

  const userId = creationResult.id;

  const userSettings = await createUserSettings(userId);

  return {
    user: creationResult,
    userSettings,
    message: "User created successfully"
  };
}
