import React, {useState} from 'react'

//any타입 문제 해결하기
const Group = (props:any) => {
    //const [title, setTitle] = useState('제목없음')

    return (
        <div>
            <p>{props.listInfo.title}</p>
        </div>
    )
}

export default Group;