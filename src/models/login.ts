export interface LoginForm {
    email: string;
    password: string;
}

export interface LoginFormValidation {
    email?: string[];
    password?: string[];
}
