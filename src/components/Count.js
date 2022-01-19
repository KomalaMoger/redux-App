import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement,reset} from '../actions/CountAction'
function Counter(props){
    console.log(props)
return (<div>
    <h2 className='h2-count-Link'>{props.count}</h2>
    <button className='Count-Link' onClick={()=>{props.dispatch(increment())}}>Up</button>
    <button className='Count-Link'onClick={()=>{props.dispatch(decrement())}}>Down</button>
    <button className='Count-Link'onClick={()=>{props.dispatch(reset())}}>Reset</button>
</div>
)
}
const mapStateToProps =(state)=>{
    return{
        count:state.count
    }
}

export default connect(mapStateToProps)(Counter)

