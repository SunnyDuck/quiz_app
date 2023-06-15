import React, {useState} from 'react';
import {useTypesSelector} from "../../hooks/useTypesSelector";

const UsersGpaMemoryTest = () => {

    const {users} = useTypesSelector(state => state.user)
    let gpaPoints = 0

    return (
        <div>
            {users.length > 0 ?
                <div>
                    {users.map(user =>
                        gpaPoints+=user.memoryExamPoints
                    ).reverse()[0]/users.length}
                </div>
                :
                <div>
                    0
                </div>
            }
        </div>
    );
};

export default UsersGpaMemoryTest;