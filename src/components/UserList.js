import React from 'react'
import {connect} from 'react-redux'
import {userlist} from '../actions/UserList'
function UserList(props){
console.log(props)
{props.dispatch(userlist())}
return(
    <div>
        <ul>
            {props.userlist.map((users,i)=>{
                return <li  className='userlist-Link' key={i}>{users.id}-{users.name}-{users.email}</li>
            })}
        </ul>
    </div>
)
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        userlist:state.userlist
    }
}
export default connect(mapStateToProps)(UserList)