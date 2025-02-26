// intreface de user
// user = {
//     isAuth: Boolean,
//     user: {username: 'el nombre de usuario'}
// }
export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                user: action.payload
            }
        case 'logout':
            return {
                isAuth: false,
                user: undefined
            }
        default:
            return state
    }

}
