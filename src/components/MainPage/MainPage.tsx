import React from 'react';
import '../../styles/MainPageStyles/MainPageStyle.css'
import UsersList from "./UsersList";
import UserList from "./UserList";

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
                    <UserList/>
                    <h4>
                        тест на скорость мышления:
                    </h4>
                </div>
                <div className={'topUsersResults-wrapper'}>
                    <h3>
                        Лучшие результаты
                    </h3>
                    <UsersList/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;