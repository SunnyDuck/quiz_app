export interface NavigationPanel{
    testname: string;
    pathlink: string;
}

export interface userState {
    users: any[]
}

export interface memoryTestState {
    memoryTestQuestions: number[]
}

export interface thinkingSpeedTestState {
    thinkingSpeedTestQuestions: string[],
    thinkingSpeedTestAnswers: number[]
}


export interface userAction {
    type: string,
    payload?: any[]
    userId?: number
}

export interface memoryTestAction {
    type: string,
    payload?: any[]
}

export interface thinkingSpeedTestAction {
    type: string,
    payload?: any[]
}

export enum userActionType{
    GET_USERS = 'GET_USERS',
    ADD_USER = 'ADD_USER',
    ADD_USER_MEMORY_POINTS = 'ADD_USER_MEMORY_POINTS',
    ADD_USER_SPEED_POINTS = 'ADD_USER_SPEED_POINTS',
}

export enum addAnswerButtonType{
    SET_SECONDS = 'SET_SECONDS',
    SET_HIDDEN = 'SET_HIDDEN',
    SET_QUESTION_NUMBER = 'SET_QUESTION_NUMBER',
    SET_DISABLE_BUTTON = 'SET_DISABLE_BUTTON',
    SET_DEFAULT_STATE = 'SET_DEFAULT_STATE'
}
export interface timerProps{
    seconds: number
}


export interface questionProps{
    hidden: boolean,
    quest: number | string
}

export interface registrationProps{
    instructionText: string
    pageRoute: string
}

export interface pageTitleProps{
    instructionText: string,
}

export interface addAnswerButtonState {
    seconds: number,
    hidden: boolean,
    questionNumber: number,
    disableButton: boolean
}

export interface addAnswerButtonAction {
    type: string
    seconds: number,
    hidden: boolean,
    questionNumber: number,
    disableButton: boolean
}