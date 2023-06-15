import React, {FC, useState} from 'react';
import '../../styles/TestsStyles/MemoryTestRegistrationPageStyle.css'
import PageTitle from "../RegistrationComponents/PageTitle";
import RegistrationComponent from "../RegistrationComponents/RegistrationComponent";
import {userId} from "../App";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

const instructionText = "Вам будут последовательно предьявляться ряды чисел и ваша задача их запомнить. " +
    "Исследование организовано следующим образом: сначала вам демонстрируется ряд чисел в течении ограниченого времени " +
    "а затем вам нужно вписать запомненные вами числа в пустые ячейки. Исследование требует концентрации внимания и занимает около 20 минут. " +
    "Спасибо что решились на это.";

const MemoryTestRegistrationPage: FC = () => {

    const dispatch = useDispatch()
    const setDefaultAnswerState = () => {
        dispatch({type: 'SET_DEFAULT_STATE'})
    }

    return (
        <div>
            {!userId ?
                <RegistrationComponent instructionText={instructionText} pageRoute={'/memorytest/'}/>:
                <div>
                    <PageTitle instructionText={instructionText}/>
                    <NavLink
                        className={'goDataButton'}
                        to={'/memorytest/' + userId}
                        onClick={() => {setDefaultAnswerState()}}
                    >
                        Вперед
                    </NavLink>
                </div>
            }
        </div>
    );
};

export {MemoryTestRegistrationPage};