import React from 'react';
import {NavLink} from "react-router-dom";
import {NavigationPanel} from '../types/data'
import {MemoryTestRegistrationPage} from "./MemoryTest/MemoryTestRegistrationPage";
import '../styles/NavigationPanelStyle.css';

const NavigationTestPanel = ({pathlink, testname}: NavigationPanel) => {
    return (
        <div className={'link_wrapper'}>
            <NavLink to={pathlink} className = {({isActive}) => isActive? 'active-link' : 'link'}>
                {testname}
            </NavLink>
        </div>
    );
};

export {NavigationTestPanel};