import { RegisterForm } from "@/interfaces/registerForm";

export function validateRegistrationForm(formData: RegisterForm) {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return "Todos los campos son obligatorios.";
    }
  
    if (formData.password !== formData.confirmPassword) {
      return "Las contraseñas no coinciden.";
    }
  
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      return "La contraseña debe tener al menos 8 caracteres, incluyendo letras, números y un carácter especial.";
    }
  
    return null;
  }