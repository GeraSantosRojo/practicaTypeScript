function calculateAge(date: string): number {
  const today = new Date();
  const birthDay = new Date(date);

  let age = today.getFullYear() - birthDay.getFullYear();

  // Ajuste si aún no ha cumplido años este año
  if (
    today.getMonth() < birthDay.getMonth() ||
    (today.getMonth() === birthDay.getMonth() && today.getDate() < birthDay.getDate())
  ) {
    age--;
  }

  return age;
}

// Ejemplo de uso
const dateOfBirth = '1993-09-24';
const age = calculateAge (dateOfBirth);

console.log(`La edad es: ${age} años`);
