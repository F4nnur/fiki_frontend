import {useSelector} from "react-redux";

export const isAuth = () => {
    const {username, token, id} = useSelector(state => state.user)
    return {
        isAuth: !!username,
        username,
        token,
        id
    }
}