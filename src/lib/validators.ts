export function validateRegisterInput(email: string, password: string, name: string) {
  const errors: string[] = [];
  if (!email.includes('@')) errors.push('Некорректный email');
  if (password.length < 6) errors.push('Пароль должен быть минимум 6 символов');
  if (!name) errors.push('Имя обязательно');
  return errors;
}

export function validateLoginInput(email: string, password: string) {
  const errors: string[] = [];
  if (!email.includes('@')) errors.push('Некорректный email');
  if (password.length < 6) errors.push('Пароль должен быть минимум 6 символов');
  return errors;
}