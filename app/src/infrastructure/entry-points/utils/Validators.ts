export class Validators {
  static get emailValidator() {
    return /^[a-zA-Z0-9._-]{1,64}@gmail\.com$/;
  }
  static get nameValidator() {
    return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,64}$/;
  }
  static get passwordValidator() {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&+=!]{8,}$/;
  }
}
