import React, {useState} from 'react'
import { useDrag, useDrop } from 'react-dnd'

const style = {
    border : '1px solid #000',
    margin : '10px',
    padding : '10px',
}


//any타입 문제 해결하기
const Group = (props:any) => {
    return (
        <div style={style}>
            {/* 제목 */}
            <p>{props.listInfo.title}</p>
            {/* 유튜브 영상 */}
            {props.listInfo.url.map((playList:string) => {
                return <iframe src={playList} width="560px" height="315px"/>
            })}
        </div>
    )
}

export default Group;