import React from 'react'
import Task from '../Task'

const mockTasks = [
    {
        name: 'Learn JS',
        isFinished: true
    },
    {
        name: 'Learn HTML',
        isFinished: true
    },
    {
        name: 'Learn CSS',
        isFinished: true
    },
    {
        name: 'Learn React',
        isFinished: false
    },
    {
        name: 'Learn Redux',
        isFinished: false
    },
    {
        name: 'Learn NodeJS',
        isFinished: true
    },
    {
        name: 'Learn Express',
        isFinished: true
    },
    {
        name: 'Learn Typescript',
        isFinished: false
    },
    {
        name: 'Learn Webpack',
        isFinished: false
    },
    {
        name: 'Learn MongoDB',
        isFinished: false
    },
    {
        name: 'Learn Vue',
        isFinished: true
    },
]



export default function TasksList() {
    return (
        <div>
            {mockTasks.map(task => <Task task={task}></Task>)}
        </div>
    )
}
