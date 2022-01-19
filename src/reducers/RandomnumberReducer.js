const initialState = {
    random: '',
    number: []
}
const randomnumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RANDOM': {
            return {
                random: action.payload,
                number: state.number.concat(action.payload)
            }
        }
        default:{
            return state
        }
    }
}
export default randomnumberReducer