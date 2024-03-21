export function calculateUserAge(dateOfBirth) {
  
  const currentDate = new Date();
  const userDateOfBirth = new Date(dateOfBirth);

  let userAge = currentDate.getFullYear() - userDateOfBirth.getFullYear();

  if (
    userDateOfBirth.getMonth() > currentDate.getMonth() ||
    (userDateOfBirth.getMonth() === currentDate.getMonth() && userDateOfBirth.getDate() > currentDate.getDate())
  ) {
    userAge--;
  }

  // Retorna true se a idade for maior ou igual a 16, caso contrário, retorna false
  return userAge >= 16;
}