export interface RegisterForm {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
    tandc: boolean;
}

export interface RegisterFormValidation {
    email?: string[];
    password?: string[];
    name?: string[];
    password_confirmation?: string[];
    tandc?: string[];
}
