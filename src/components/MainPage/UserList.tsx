import React, {FC} from 'react';
import {useTypesSelector} from "../hooks/useTypesSelector";
import {Route} from "react-router-dom";

const UserList: FC = () => {

    const {users} = useTypesSelector(state => state.user)

    return (
        <div>
            {users.length > 0 ?
                <div>
                    {users[users.length-1].name}
                </div>
                :
                <div>
                    Пройдите тест
                </div>
            }
        </div>
    );
};

export default UserList;