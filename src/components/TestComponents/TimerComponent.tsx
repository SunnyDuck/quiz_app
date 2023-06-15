import React from 'react';
import {timerProps} from "../../types/data";

const TimerComponent = (props:timerProps) => {
    return (
        <div className={'timer'}>
            <h3>Осталось времени:</h3>
            <div className={'test-symbols'}>{props.seconds}</div>
        </div>
    );
};

export default TimerComponent;