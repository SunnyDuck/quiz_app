import React from 'react';
import PageTitle from "./PageTitle";
import RegistrationTitle from "./RegistrationTitle";
import DataCapture from "./DataCapture";
import {registrationProps} from "../../types/data";

const RegistrationComponent = (props: registrationProps) => {
    return (
        <div className={'memoryTestPage-wrapper'}>
            <PageTitle instructionText={props.instructionText}/>
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

export default RegistrationComponent;