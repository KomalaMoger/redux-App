const InitialState=[
    {id:1,title:'db design',completed:true},
    {id:2,title:'db backup',completed:false},
    {id:3,title:'ui design',completed:false}
]
 const taskReducer=(state=InitialState,action)=>{
  switch(action.type){
      case 'ADD-TASK':{
          return state.concat(action.payload)
      }
      case 'REMOVE-TASK':{
          return state.filter((task)=>task.id!==action.payload)
      }
      case 'CHECKTOGGLE':{
          return state.map((task)=>{
            if(task.id==action.payload){
                return{...task,status:!task.status}
            }
            else{
                return{...task}
            }
          
          })
      }
      default:{
          return [...state]
      }
  }
 }
 export default taskReducer