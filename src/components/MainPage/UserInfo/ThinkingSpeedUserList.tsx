import React, {FC} from 'react';
import {useTypesSelector} from "../../hooks/useTypesSelector";

const MemoryUserList: FC = () => {

    const {users} = useTypesSelector(state => state.user)

    return (
        <div>
            {users.length > 0 ?
                <div>
                    {users[users.length-1].name}
                    <div></div>
                    {users[users.length-1].speedExamPoints}
                </div>
                :
                <div>
                    Пройдите тест
                </div>
            }
        </div>
    );
};

export default MemoryUserList;