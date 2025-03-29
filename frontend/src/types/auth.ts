export interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    id: string;
    name: string;
    email: string;
    token: string;
}
