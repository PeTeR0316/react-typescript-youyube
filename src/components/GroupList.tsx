import React, {useState, useEffect} from 'react';
import Group from './Group';

const GroupList = () => {
    interface groupList {
        title:string;
    }

    const [groupList, setGroupList] = useState([
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
                return <Group listInfo={listData}/>
                // return <Group txt={"제목없음"}/>
            })}
        </div>
    )
}

export default GroupList;