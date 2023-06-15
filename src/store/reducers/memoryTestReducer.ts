import {memoryTestState, memoryTestAction} from "../../types/data";

const initialState: memoryTestState = {
    memoryTestQuestions: [3, 42, 678, 1902]
}

export const memoryTestReducer = (state = initialState, action: memoryTestAction): memoryTestState => {
    switch (action.type){
        default:
            return state
    }
}