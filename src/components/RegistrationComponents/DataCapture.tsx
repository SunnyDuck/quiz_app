import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActionType} from "../../types/data";
import {useState} from "react";
const DataCapture = () => {

    const dispatch = useDispatch()

    const [username, setUserNameInput] = useState<string>('');
    const [userage, setUserAgeInput] = useState<string>('')
    const [userGender, setUserGender] = useState<string>('');


    const addUser = (name: string, age: string, gender: string, memoryExamPoints: number, speedExamPoints: number) => {
        const user = {
            name,
            age,
            gender,
            memoryExamPoints,
            speedExamPoints,
            id: Date.now()
        }
        dispatch({type: userActionType.ADD_USER, payload: user})
    }

    return (
        <div>
            <p>Укажите ваше имя:</p>
            <input type={"text"} onChange={e => setUserNameInput(e.target.value)}/>
            <p>Укажите ваш пол:</p>
            <select onChange={e => setUserGender(e.target.value)} className={'genderStyle'}>
                <option></option>
                <option>мужской</option>
                <option>женский</option>
            </select>
            <p>Укажите ваш возраст:</p>
            <input type={"number"} onChange={e => setUserAgeInput(e.target.value)}/>
            <h3>Отправить данные и начать тест!</h3>
            <div className={'dataButtons'}>
                <button className={'saveDataButton'} onClick={() => addUser(username, userage, userGender, 0, 0)}>Сохранить данные</button>
            </div>
        </div>
    );
};

export default DataCapture;