export const addtask=(task)=>{
    return {type:'ADD-TASK',payload:task}
}
export const removetask=(id)=>{
    return {type:'REMOVE-TASK',payload:id}
}
export const checktoggle=(id)=>{
    return {type:'CHECKTOGGLE',payload:id}
}