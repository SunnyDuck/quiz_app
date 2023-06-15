import React from 'react';
import {questionProps} from "../../types/data";

const QuestionComponent = (props: questionProps) => {
    return (
        <div className={'question'}>
            <h3 hidden={!props.hidden}>Запомните число:</h3>
            <div className={'test-symbols'} hidden={!props.hidden}>{props.quest}</div>
            <h3 hidden={props.hidden}>Соберись!</h3>
            <p hidden={props.hidden} className={'test-symbols'}>&#9786;</p>
        </div>
    );
};

export default QuestionComponent;