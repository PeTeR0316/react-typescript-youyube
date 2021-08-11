import React, {useState} from 'react'

const Group = () => {
    const [title, setTitle] = useState('제목없음')

    return (
        <div>
            <p>{title}</p>
        </div>
    )
}

export default Group;