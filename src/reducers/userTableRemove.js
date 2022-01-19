const InitialState = [
    { id: 1, name: 'komala', email: 'komala@gmailc.om' },
    { id: 2, name: 'manoj', email: 'manoj@gmailc.om' },
    { id: 3, name: 'laxmi', email: 'laxmi@gmailc.om' },
    { id: 4, name: 'ganesh', email: 'ganeshs@gmailc.om' }
]
const userremoveReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'REMOVE_BY_NAME': {
            return state.filter((user) => user.name !== action.payload)
        }
        default: {
            return state
        }
    }
}
export default userremoveReducer


