import React from 'react';
import '../../styles/MainPageStyles/MainPageStyle.css'
import MemoryUsersList from "./UsersInfo/MemoryUsersList";
import MemoryUserList from "./UserInfo/MemoryUserList";
import UsersGpaMemoryTest from "./UsersInfo/UsersGPAMemoryTest";
import UsersGpaSpeedTest from "./UsersInfo/UsersGPASpeedTest";
import ThinkingSpeedUserList from "./UserInfo/ThinkingSpeedUserList";
import ThinkingSpeedUsersList from "./UsersInfo/ThinkingSpeedUsersList";

const MainPage = () => {
    return (
        <div className={'mainPage-wrapper'}>
            <div>
                <h1>Сайт для оценки объема памяти и скорости мышления</h1>
            </div>
            <div className={'usersResults-wrapper'}>
                <div className={'userResult-wrapper'}>
                    <h3>
                        Ваши результаты
                    </h3>
                    <h4>
                        тест на объем памяти:
                    </h4>
                    <MemoryUserList/>
                    <h4>
                        тест на скорость мышления:
                    </h4>
                    <ThinkingSpeedUserList/>
                </div>
                <div className={'topUsersResults-wrapper'}>
                    <h3>
                        Лучшие результаты теста на объем памяти
                    </h3>
                    <MemoryUsersList/>
                    <h3>
                        Средний балл теста на объем памяти
                    </h3>
                    <UsersGpaMemoryTest/>
                </div>
                <div className={'topUsersResults-wrapper'}>
                    <h3>
                        Лучшие результаты теста на скорость мышления
                    </h3>
                    <ThinkingSpeedUsersList/>
                    <h3>
                        Средний балл теста на скорость мышления
                    </h3>
                    <UsersGpaSpeedTest/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;