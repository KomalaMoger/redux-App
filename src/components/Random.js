import React from 'react'
import {connect} from 'react-redux'
import {random} from '../actions/RandomAction'
function Random(props) {
    console.log(props)
    return (
        <div>
            <h2 className='h2-random-Link'>{props.random}</h2>
            <button  className='random-Link'onClick={()=>{const rand=Math.round(Math.random()*100)
                props.dispatch(random(rand))}}>Random</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
   return{
    random:state.random
   }
}
export default connect(mapStateToProps)(Random)