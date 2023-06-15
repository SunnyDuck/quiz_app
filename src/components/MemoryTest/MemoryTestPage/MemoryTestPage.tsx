import React, {useState} from 'react';
import {useTypesSelector} from "../../hooks/useTypesSelector";
import '../../../styles/MemoryTestStyles/MemoryTestPageStyle.css'
import TimerComponent from "../../TestComponents/TimerComponent";
import QuestionComponent from "../../TestComponents/QuestionComponent";
import {useDispatch} from "react-redux";
import {addAnswerButtonType, userActionType} from "../../../types/data";
import {NavLink} from "react-router-dom";
import AddAnswerButton from "../../TestComponents/AddAnswerButton";

const MemoryTestPage = () => {

    const dispatch = useDispatch()
    const {memoryTestQuestions} = useTypesSelector(state => state.memoryTest)
    const {seconds, hidden, questionNumber, disableButton} = useTypesSelector(state => state.addAnswerButton)
    const [userAnswer, setUserAnswer] = useState<number>()

    const setSeconds = (seconds: number) => {
        dispatch({type: addAnswerButtonType.SET_SECONDS, seconds})
    }

    const setHidden = (hidden: boolean) => {
        dispatch({type: addAnswerButtonType.SET_HIDDEN, hidden})
    }

    React.useEffect(() => {
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

    const addUserPoints = (points: number, id: number) => {
        dispatch({type: userActionType.ADD_USER_MEMORY_POINTS, payload: points, userId: id})
    }

    return (
        <div className={'test-wrapper'}>
            <div className={'test-container'}>
                <TimerComponent seconds={seconds}/>
                <QuestionComponent hidden={hidden} quest={memoryTestQuestions[questionNumber]}/>
                <input id={'inputID'} hidden={hidden} onChange={
                    e => setUserAnswer(Number(e.target.value))
                }/>
                <AddAnswerButton
                    testLength={memoryTestQuestions.length-1}
                    userAnswer={Number(userAnswer)}
                    correctAnswer={memoryTestQuestions[questionNumber]}
                    testType={userActionType.ADD_USER_MEMORY_POINTS}
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

export default MemoryTestPage;