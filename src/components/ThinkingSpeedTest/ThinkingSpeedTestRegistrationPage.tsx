import React, {FC} from 'react';
import '../../styles/TestsStyles/MemoryTestPageStyle.css'
import {userId} from "../App";
import RegistrationComponent from "../RegistrationComponents/RegistrationComponent";
import {NavLink} from "react-router-dom";
import PageTitle from "../RegistrationComponents/PageTitle";
import {useDispatch} from "react-redux";
import {useTypesSelector} from "../hooks/useTypesSelector";

const instructionText = "Вам будут последовательно предьявляться математические примеры и ваша задача решить их. " +
    "Исследование организовано следующим образом: сначала вам демонстрируется математический пример в течении ограниченого времени " +
    "а затем вам нужно вписать ответ в пустую ячейку. Исследование требует концентрации внимания и занимает около 20 минут. " +
    "Спасибо что решились на это.";

const ThinkingSpeedTestRegistrationPage: FC = () => {

    const dispatch = useDispatch()
    const {thinkingSpeedTestQuestions} = useTypesSelector(state => state.thinkingSpeedTest)
    const setDefaultAnswerState = () => {
        dispatch({type: 'SET_DEFAULT_STATE'})
    }

    return (
        <div>
            {userId ===0?
                <RegistrationComponent instructionText={instructionText} pageRoute={'/thinkingspeedtest/'} questionsAmount={thinkingSpeedTestQuestions.length}/>:
                <div>
                    <PageTitle instructionText={instructionText}/>
                    <NavLink
                        className={'goDataButton'}
                        to={'/thinkingspeedtest/' + userId}
                        onClick={() => {setDefaultAnswerState()}}
                    >
                        Вперед
                    </NavLink>
                </div>
            }
        </div>
    );
};

export default ThinkingSpeedTestRegistrationPage;