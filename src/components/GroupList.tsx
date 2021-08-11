import React, {useState, useEffect} from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

import Group from './Group';

interface groupList {
    no:number,
    title:string,
    url:string
}

const GroupList = () => {
    const [groupList, setGroupList] = useState([
        {
            no : 1,
            title : "여름 음악",
            url : [
                "https://www.youtube.com/embed/2-InQ7cZhBM",
                "https://www.youtube.com/embed/jPmYlhXMwb0"
            ]
        },
        {
            no : 2,
            title : "재즈 음악",
            url : ["https://www.youtube.com/embed/ZL4ulKSut2M"]
        },
        {
            no : 3,
            title : "시티팝",
            url : [
                "https://www.youtube.com/embed/t7sePtHnpkc",
                "https://www.youtube.com/embed/vBYC31o3dVI"
            ]
        }
    ])

    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                {groupList.map((listData) => {
                    return <Group listInfo={listData}/>
                })}
            </DndProvider>
        </div>
    )
}

export default GroupList;