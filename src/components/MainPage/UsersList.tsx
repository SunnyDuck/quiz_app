import React, {FC} from 'react';
import {useTypesSelector} from "../hooks/useTypesSelector";

const UsersList: FC = () => {

    const {users} = useTypesSelector(state => state.user)

    return (
        <div>
            {users.length > 0 ?
                <div>
                    {users.map(user =>
                        <div>
                            {user.name}
                        </div>
                    )}
                </div>
                :
                <div>
                    Пользователи отсутсвуют
                </div>
            }
        </div>
    );
};

export default UsersList;