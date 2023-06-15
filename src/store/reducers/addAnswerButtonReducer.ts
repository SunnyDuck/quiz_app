import {addAnswerButtonAction, addAnswerButtonState, addAnswerButtonType} from "../../types/data";


const initialState: addAnswerButtonState = {
    seconds: 5,
    hidden: true,
    questionNumber: 0,
    disableButton: false
}

export const addAnswerButtonReducer = (state = initialState, action: addAnswerButtonAction): addAnswerButtonState => {
    switch (action.type){
        case addAnswerButtonType.SET_SECONDS:
            return({
                seconds: action.seconds,
                hidden: state.hidden,
                questionNumber: state.questionNumber,
                disableButton: state.disableButton
            })
        case addAnswerButtonType.SET_HIDDEN:
            return ({
                hidden: action.hidden,
                seconds: state.seconds,
                questionNumber: state.questionNumber,
                disableButton: state.disableButton
            })
        case addAnswerButtonType.SET_QUESTION_NUMBER:
            return ({
                questionNumber: action.questionNumber,
                seconds: state.seconds,
                hidden: state.hidden,
                disableButton: state.disableButton
            })
        case addAnswerButtonType.SET_DISABLE_BUTTON:
            return ({
                questionNumber: state.questionNumber,
                seconds: state.seconds,
                hidden: state.hidden,
                disableButton: action.disableButton
            })
        case addAnswerButtonType.SET_DEFAULT_STATE:
            return (state = initialState)
        default:
            return state
    }
}