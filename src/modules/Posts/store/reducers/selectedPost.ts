import { Actions } from '../../../../libs/utils/store/types';
import {SELECTED_POST,CLEAR_SELECTED_POST} from "../actionTypes";
import {SelectedPostInStore} from "../types";
import { selectedPostInitialValues } from "../initialState";

export default (state: SelectedPostInStore = selectedPostInitialValues, { type, payload }: Actions): SelectedPostInStore => {
    switch (type) {
        case SELECTED_POST:
            return {
                ...state,
                post: payload,
            };
        case CLEAR_SELECTED_POST:
            return {
                ...state,
                post: {},
            };
        default:
            return state;
    }
};