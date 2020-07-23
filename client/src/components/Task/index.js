import React from 'react'

export default function Task(props) {

    return (
        <div>
            <input type='checkbox' checked={props.task.isFinished}></input>
            <span>{props.task.name}</span>
        </div>
    )
}