export interface GetUserInStore {
    id: string;
    email: string;
    phone: string;
    contact_face?:string
    name: string;
    location?: string;
    role: string;
}

export interface GetAllUsersInStore{
    allUsers:any[],
    pages:number
}


export interface CreateFormValues {
    name?: string;
    description?: string;
    monthly_rate?: number;
};



export interface changePasswordValues{
    old_password: string;
    password: string;
    password_confirmation: string;
};