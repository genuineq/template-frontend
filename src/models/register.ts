export interface RegisterForm {
    email: string;
    password: string;
    password_confirm: string;
    name: string;
    tandc: boolean;
}

export interface RegisterFormValidation {
    email?: string[];
    password?: string[];
    name?: string[];
    password_confirm?: string[];
    tandc?: string[];
}
