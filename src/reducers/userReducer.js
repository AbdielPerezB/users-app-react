// payload = {
//     username: '',
//     pass: '',
//     email:''
// };

export const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'addUser':
            return [
                ...state,   
                {
                    ...action.payload,
                    id: new Date().getTime()
                }
            ]
        case 'deleteUser':
            return state.filter(user => user.id !== action.id)
        case 'updateUser':
            return state.map(user => {
                if(user.id === action.payload.id){
                    return {
                        ...action.payload,
                        pass: user.pass
                    }
                }
                return user
            })

        default:
            break;
    }
}