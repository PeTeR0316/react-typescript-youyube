import React, {useState, useEffect} from 'react';
import Group from './Group';

interface groupList {
    title:string;
}

const GroupList = () => {
    // const [groupList, setGroupList] = useState([
    //     {
    //         title : stirng;
    //     },
    // ])

    groupList([
        {
            title : "제목없음1"
        },
        {
            title : "제목없음2"
        },
        {
            title : "제목없음3"
        }
    ])

    return (
        <div>
            {groupList.map((listData) => {
                <Group title={listData.title}/>
            })}
        </div>
    )
}

export default GroupList;