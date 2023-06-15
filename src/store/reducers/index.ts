import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {memoryTestReducer} from "./memoryTestReducer";
import {thinkingSpeedTestReducer} from "./thinkingSpeedTestReducer";
import {addAnswerButtonReducer} from "./addAnswerButtonReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    memoryTest: memoryTestReducer,
    thinkingSpeedTest: thinkingSpeedTestReducer,
    addAnswerButton: addAnswerButtonReducer
})

export type RootState = ReturnType<typeof rootReducer>