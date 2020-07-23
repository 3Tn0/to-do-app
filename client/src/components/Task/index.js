import React, { useState } from 'react'
import './style.css'

export default function Task(props) {

    let [isFinished, setFinished] = useState(props.task.isFinished)

    let taskOnToggle = () => {
        setFinished((value) => !value)
    }

    return (
        <div className="task">
            <input className="task__checkbox" type='checkbox' checked={isFinished} onClick={taskOnToggle}></input>
            <span className={isFinished ? 'task__text-finished' : ''}>{props.task.name}</span>
        </div>
    )
}