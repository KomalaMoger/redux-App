import React from 'react'
import {connect} from 'react-redux'
import {removeByName} from '../actions/UserTableAction'
function UserRemove(props){
    console.log(props,'hjhh')
   const handleClick=(user)=>{
       const nameremove=prompt('enter the name')
       if(nameremove==user.name){
           props.dispatch(removeByName(nameremove))
       }
       else{
           alert ('invalid name')
       }
    }
return(
    <div>
        <table border='1'>
        <thead>
            <tr className='userremove-Link'>
                <th>sl.no</th>
                <th>name</th>
                <th>email</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {props.userremove.map((user)=>{
                return <tr className='userremove-Link' key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button className='remove-Link' onClick={()=>{handleClick(user)}}>remove</button></td>
                </tr>
            })}
        </tbody>
        </table>
    </div>
)
}
const mapStateToProps=(state)=>{
    console.log(state,'hjhh')
    return{
        userremove:state.useremove
    }
}
export default connect(mapStateToProps)(UserRemove)

// import React from 'react'
// import {connect} from 'react-redux'
// import {removeByName} from '../actions/UserTableAction'
// function UserRemove(props){
//     const handleNameRemove=(user)=>{
//         const userName=prompt('enter name to remove')
// if(userName==user.name){
//     console.log(userName)
//     props.dispatch(removeByName(userName))
// }
// else{
//     alert('invalid name entered')
// }
// }
// return(
//     <table border='1'>
//         <thead>
//             <tr>
//                 <th>#</th>
//                 <th>name</th>
//                 <th>email</th>
//                 <th>action</th>
               
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 props.users.map(user=>{
//                     return(
//                         <tr key={user.id}>
//                         {/* <td>{user.id}</td> */}
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td><button onClick={()=>{
//                         handleNameRemove(user)
//                     }}>remove</button></td>
//                         </tr>
//                     )
//                 })
//             }
//         </tbody>
//     </table>
// )
//         }
//         const mapStateToProps=(state)=>{
//             return{
//                 users:state.useremove
//             }
//         }
        
// export default connect(mapStateToProps)( UserRemove)