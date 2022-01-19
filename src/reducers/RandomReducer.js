const initialState=''
const randomReducer=(state=initialState,action)=>{
   switch (action.type) {
       case 'RANDOM':{
           return action.payload
       }
       default:{
           return state
       }
   } 
}
export default randomReducer