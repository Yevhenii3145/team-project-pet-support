import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {

    const isLogin = useSelector(state => state.auth.isLogin)
    console.log("isLogin", isLogin)
    
        if(!isLogin) {
            return <Navigate to="/login"/>
        }
    
        return <Outlet/>
    }
    
    export default Private;