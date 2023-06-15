import React from 'react';
import {pageTitleProps} from "../../types/data";


const PageTitle = (props: pageTitleProps) => {
    return (
        <div>
            <h1>Инструкция по работе с тестом</h1>
            <p>{props.instructionText}</p>
        </div>
    );
};

export default PageTitle;