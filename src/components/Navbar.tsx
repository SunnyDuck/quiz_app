import React from 'react';
import {NavigationTestPanel} from "./NavigationTestPanel";
import '../styles/NavbarStyle.css'

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <img src='mylogo.png'/>
            <NavigationTestPanel
                pathlink={'/'}
                testname={'Главная страница'}
            />
            <NavigationTestPanel
                pathlink={'/memorytest'}
                testname={'Тест на объем памяти'}
            />
            <NavigationTestPanel
                pathlink={'/thinkingspeedtest'}
                testname={'Тест на скорость мышления'}
            />
        </div>
    );
};

export default Navbar;