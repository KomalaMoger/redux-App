import { render } from '@testing-library/react'
import React from 'react'
import {connect} from 'react-redux'
import {addtask} from '../actions/TaskAction'
class TaskAdd extends React.Component{
    constructor(){
        super()
        this.state={
            title:''
        }
    }
    handleChange=(e)=>{
        const title=e.target.value
        this.setState({title})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:Number(new Date()),
            title:this.state.title,
            completed:false
        }
        this.props.dispatch(addtask(formData))
    }
 render(){
     return(
         <div>
             <form onSubmit={this.handleSubmit}>
                 <label className='taskadd-Link'>Title</label>
             <input  className='taskinput'type='text' value={this.state.title} onChange={this.handleChange}/>
             <input className='taskbuttonremove-Link' type='submit'/>
             </form>
         </div>
     )
 }
}

export default connect()(TaskAdd)