import { IsLoged } from "./isLoged";
import { NoLoged } from "./noLoged";

export function NavBar({isLoged, setIsLoged}){
    return(
        isLoged ? <IsLoged setIsLoged={setIsLoged}/> :<NoLoged/>
    );
    
}