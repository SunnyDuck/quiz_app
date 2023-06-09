import React, {useEffect, useRef, useState} from 'react';
import '../../../styles/TestsStyles/MemoryTestPageStyle.css'
import {useDispatch} from "react-redux";
import TimerComponent from "../../TestComponents/TimerComponent";
import QuestionComponent from "../../TestComponents/QuestionComponent";
import {useTypesSelector} from "../../hooks/useTypesSelector";
import {NavLink} from "react-router-dom";
import AddAnswerButton from "../../TestComponents/AddAnswerButton";
import {addAnswerButtonType, userActionType} from "../../../types/data";


const ThinkingSpeedTestPage = () => {

    const dispatch = useDispatch()
    const {thinkingSpeedTestQuestions, thinkingSpeedTestAnswers} = useTypesSelector(state => state.thinkingSpeedTest)
    const {seconds, hidden, questionNumber, disableButton, answerInputState} = useTypesSelector(state => state.addAnswerButton)
    const [userAnswer, setUserAnswer] = useState<number>()
    const inputRef = useRef(null);


    const setSeconds = (seconds: number) => {
        dispatch({type: addAnswerButtonType.SET_SECONDS, seconds})
    }

    const setHidden = (hidden: boolean) => {
        dispatch({type: addAnswerButtonType.SET_HIDDEN, hidden})
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            else {
                setHidden(false)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [seconds]);

    return (
        <div className={'test-wrapper'}>
            <div className={'test-container'}>
                <TimerComponent seconds={seconds}/>
                <QuestionComponent hidden={hidden} quest={thinkingSpeedTestQuestions[questionNumber]}/>
                <input value={answerInputState} hidden={hidden} onChange={e => setUserAnswer(Number(e.target.value))}/>
                <AddAnswerButton
                    testLength={thinkingSpeedTestQuestions.length-1}
                    userAnswer={Number(userAnswer)}
                    correctAnswer={thinkingSpeedTestAnswers[questionNumber]}
                    testType={userActionType.ADD_USER_SPEED_POINTS}
                />
                <NavLink
                    className={'saveDataButton'}
                    hidden={!disableButton}
                    to={'/'}
                >Узнать результат
                </NavLink>
            </div>
        </div>
    );
};

export default ThinkingSpeedTestPage;