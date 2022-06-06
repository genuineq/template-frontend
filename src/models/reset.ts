export interface ResetForm {
    password: string;
    password_confirm: string;
}

export interface ResetFormValidation {
    password?: string[];
    password_confirm?: string[];
}
