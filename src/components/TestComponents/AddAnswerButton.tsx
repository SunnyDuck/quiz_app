import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {addAnswerButtonType, userActionType} from "../../types/data";
import {userId} from "../App";

interface addAnswerButtonProps{
    testLength: number,
    userAnswer: number,
    correctAnswer: number,
    testType: userActionType
}

const AddAnswerButton = (props: addAnswerButtonProps) => {

    const dispatch = useDispatch()
    const {hidden, questionNumber} = useTypesSelector(state => state.addAnswerButton)
    const [userTestPoints, setUserTestPoints] = useState<number>(0)
    const setSeconds = (seconds: number) => {
        dispatch({type: addAnswerButtonType.SET_SECONDS, seconds})
    }

    const setHidden = (hidden: boolean) => {
      dispatch({type: addAnswerButtonType.SET_HIDDEN, hidden})
    }

    const setQuestionNumber = (questionNumber: number) => {
        dispatch({type: addAnswerButtonType.SET_QUESTION_NUMBER, questionNumber})
    }

    const setDisableButton = (disableButton: boolean) => {
        dispatch({type: addAnswerButtonType.SET_DISABLE_BUTTON, disableButton})
    }

    const addUserPoints = (type: userActionType, points: number, id: number) => {
        dispatch({type: type, payload: points, userId: id})
    }

    return (
        <button hidden={hidden} onClick={() => {
            if(questionNumber < props.testLength){
                setHidden(true)
                props.userAnswer === props.correctAnswer ?
                    setUserTestPoints(userTestPoints + 1)
                    :
                    setUserTestPoints(userTestPoints)
                setSeconds(2)
                setQuestionNumber(questionNumber+1)
            }
            else{
                setDisableButton(true)
                addUserPoints(props.testType, props.userAnswer === props.correctAnswer ? userTestPoints+1 : userTestPoints, userId)
            }
        }}>Ответить</button>
    );
};

export default AddAnswerButton;