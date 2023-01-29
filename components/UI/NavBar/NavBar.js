import { IsLoged } from "./isLoged";
import { NoLoged } from "./noLoged";

export function NavBar({isLogin}){
    isLogin = false
    return(
        isLogin ? <IsLoged/> :<NoLoged/>
    );
    
}