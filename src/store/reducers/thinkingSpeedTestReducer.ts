import {thinkingSpeedTestState, thinkingSpeedTestAction} from "../../types/data";

const initialState: thinkingSpeedTestState = {
    thinkingSpeedTestQuestions: ['1+2', ' 3+5', '12+9', '14+27'],
    thinkingSpeedTestAnswers: [3, 8, 21, 41]
}

export const thinkingSpeedTestReducer = (state = initialState, action: thinkingSpeedTestAction): thinkingSpeedTestState => {
    switch (action.type){
        default:
            return state
    }
}