import {userState, userActionType, userAction} from "../../types/data";

const initialState: userState = {
    users: []
}

export const userReducer = (state = initialState, action: userAction): userState => {
    switch (action.type){
        case userActionType.GET_USERS:
            return({users: []})
        case userActionType.ADD_USER:
            return({...state, users: [...state.users, action.payload]})
        default:
            return state
    }
}