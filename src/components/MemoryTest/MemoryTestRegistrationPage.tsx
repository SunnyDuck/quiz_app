import React, {FC} from 'react';
import '../../styles/MemoryTestStyles/MemoryTestPageStyle.css'
import PageTitle from "./PageTitle";
import RegistrationTitle from "./RegistrationTitle";
import DataCapture from "./DataCapture";

const MemoryTestRegistrationPage: FC = () => {
    return (
        <div className={'memoryTestPage-wrapper'}>
            <PageTitle/>
            <div className={'registrationLabel-wrapper'}>
                <div>
                    <div>
                        <RegistrationTitle/>
                    </div>
                    <DataCapture/>
                    <p>Количество вопросов в тесте: 14</p>
                </div>
                <img src={'cuteimg.jpg'} className={'cuteImg'}/>
            </div>
        </div>
    );
};

export {MemoryTestRegistrationPage};