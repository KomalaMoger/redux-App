import React from 'react'
import { connect } from 'react-redux'
import { random } from '../actions/RandomnumberAction'
function RandomNumber(props) {
    console.log(props)
    const handleClick = () => {
        const rand = Math.round(Math.random() * 100)
        props.dispatch(random(rand))
    }
    return (
        <div>
            <h2 className='h2-randomnumber-Link'>{props.random}</h2>
        <button className='random-Link' onClick={ handleClick }>Random</button>
   
    <ul>
        {props.number.map((ele, i) => {
            return (
                <li className='h2-randomnumber-Link' key={i}>{ele}</li>
            )
        })}
    </ul>
    </div>
)
   
}
const mapStateToProps = (state) => {
    return {
        number: state.randomnumber.number,
        random: state.randomnumber.random
        
    }
}
export default connect(mapStateToProps)(RandomNumber)

// import React from 'react'
// // higher order-a component(function) which takes another cc(function) as an argument or returns a component(function)
// // is called higer order component(function)
// import {connect} from 'react-redux'
// import {random} from '../actions/RandomnumberAction'
// function RandomNumber(props){
//     const handleClick=()=>{
//         const rand=Math.round(Math.random()*100)
//         props.dispatch(random(rand))
//     }
//     console.log(props)
//     return (
//         <div>
// <h1>{props.random}</h1>
//     <button onClick={handleClick}>genertor</button>
//         <ul>
//                             {props.number.map( (ele,i)  => {
//                                 return (
//                                     <li key={ele, i}>{ele}</li>
//                                 )
//                             })}
//                         </ul>
//         </div>
//     )
// }
// const mapStateToProps=(state)=>{
//     console.log(state)
// return{
//     number:state.randomnumber.number,
//     random : state.randomnumber.random
// }
// }

// // wrapped componet
// // const wrappedComponent=connect(mapstateToPrps)

// export default connect(mapStateToProps)(RandomNumber)
