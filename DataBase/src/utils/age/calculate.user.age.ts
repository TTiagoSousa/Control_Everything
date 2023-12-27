export function calculateUserAge(dateOfBirth: Date): number {
  const currentDate = new Date();

  const userDateOfBirth = new Date(dateOfBirth);

  let userAge = currentDate.getFullYear() - userDateOfBirth.getFullYear();

  if (
    userDateOfBirth.getMonth() > currentDate.getMonth() ||
    (userDateOfBirth.getMonth() === currentDate.getMonth() && userDateOfBirth.getDate() > currentDate.getDate())
  ) {
    userAge--;
  }

  return userAge;
}