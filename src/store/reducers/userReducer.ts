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
        case userActionType.ADD_USER_MEMORY_POINTS:
            return ({...state, users: state.users.map(
                user => user.id === action.userId
                    ?{
                    ...user, memoryExamPoints: action.payload
                    }
                    : user
                )})
        case userActionType.ADD_USER_SPEED_POINTS:
            return ({...state, users: state.users.map(
                    user => user.id === action.userId
                        ?{
                            ...user, speedExamPoints: action.payload
                        }
                        : user
                )})
        default:
            return state
    }
}