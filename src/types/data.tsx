export interface NavigationPanel{
    testname: string;
    pathlink: string;
}

export interface userState {
    users: any[]
}

export interface userAction {
    type: string,
    payload?: any[]
}

export enum userActionType{
    GET_USERS = 'GET_USERS',
    ADD_USER = 'ADD_USER'
}