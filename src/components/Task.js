import React from 'react'
import { connect } from 'react-redux'
import {removetask,checktoggle} from '../actions/TaskAction'
import TaskAdd from './TaskAdd'
function Tasks(props) {
    console.log(props)
   const handlecheckClick=(id)=>{
        props.dispatch(checktoggle(id))
    }
    const  handleremoveClick=(id)=>{
        props.dispatch(removetask(id))
    }
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr className='taskremove-Link'>
                        <th>sl.no</th>
                        <th>title</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((task=>{
                        return <tr className='taskremove-Link' key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td><input type='checkbox' checked={task.status} onClick={()=>{handlecheckClick(task.id)}}/></td>
                            <td><button className='taskbuttonremove-Link' onClick={()=>{handleremoveClick(task.id)}}>remove</button></td>
                        </tr>
                    }))}
                </tbody>
            </table>
            <br/>
            <TaskAdd/>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
       tasks:state.task
    }
}
export default connect(mapStateToProps)(Tasks)