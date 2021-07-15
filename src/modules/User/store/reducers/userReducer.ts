import { Actions } from '../../../../libs/utils/store/types';
import {GET_USER, SET_USER,UPDATE_USER} from "../actionTypes";
import {GetUserInStore} from "../types";
import {UserInitialValues} from "../initialState";

export default (state: GetUserInStore = UserInitialValues, { type, payload }: Actions): GetUserInStore => {
    switch (type) {
        case GET_USER:
            return {
              ...state,
            };
        case SET_USER:
            return {
                ...state,
                id: payload.user.id ,
                email: payload.user.email ,
                name: payload.user.name ,
                location: payload.user.location  == null? "" :payload.user.location,
                contact_face: payload.user.contact_face == null? "" : payload.user.contact_face ,
                phone: payload.user.phone ,
                role: payload.role ,
            };
        case UPDATE_USER:
            return {...state,
                id: payload[0].id ,
                email: payload[0].email ,
                name: payload[0].name ,
                location: payload[0].location,
                contact_face: payload[0].contact_face,
                phone: payload[0].phone,
            }
        default:
            return state;
    }
};