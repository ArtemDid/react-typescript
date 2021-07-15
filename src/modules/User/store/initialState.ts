import {User} from "../../../libs/utils/store/types";
import { 
    changePasswordValues,
    GetAllUsersInStore,
} from "./types";

export const UserInitialValues: User = {
    id: '',
    email: '',
    phone: '',
    contact_face:'',
    name: '',
    location: '',
    role: '',
};
export const AllUsersInitialValues: GetAllUsersInStore = {
    allUsers:[],
    pages:1
};

export const changePasswordInitialValues: changePasswordValues = {

    old_password: '',
    password: '',
    password_confirmation: '',
    
  }
