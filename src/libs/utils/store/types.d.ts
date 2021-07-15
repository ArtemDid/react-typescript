export interface Actions {
    type: string;
    payload?: any;
    meta?: any;
}

export interface PayloadAction<T> {
    type: string;
    payload?: T;
    meta?: any;
}

export interface rootState {
    isActive: boolean,
    goalModalForm: string
}

export interface Role {
    id: string;
    name: string;
}

export interface User {
    id: string;
    email: string;
    phone: string;
    contact_face?:string
    name: string;
    location?: string;
    role: string;
}

interface setActiveAction {
    type: OtherActionTypes.SET_ACTIVE;
    payload: boolean;
}

interface setGoalModalFormAction {
    type: OtherActionTypes.SET_GOAL_MODAL_FORM;
    payload: string;
}

export type modalAction = setActiveAction | setGoalModalFormAction
