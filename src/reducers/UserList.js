const initialState = [
    { id: 1, name: 'komala', email: 'komala@gmail.com' },
    { id: 2, name: 'manoj', email: 'manojgmail.com' },
    { id: 3, name: 'laxmi', email: 'laxmi@gmail.com' },
    { id: 4, name: 'ganesh', email: 'ganesh@gmail.com' }
]
const userlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER-LIST': {
            return state
        }
        default: {
            return state
        }
    }
}
export default userlistReducer