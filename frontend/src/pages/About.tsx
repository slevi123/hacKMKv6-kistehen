import { Link } from "react-router-dom";
import { Sidebar } from "../layout/Sidebar";
import { RouteList } from "../layout/RoutesList";

export function About() {
    return (
        
        <div>
            <Sidebar>
                <h1>About Sidebar</h1>

                {/* <Link to="/">Home</Link> */}
                <RouteList />
            </Sidebar>
            
            <h1>About</h1>
            <Link to="/">Home</Link>
        </div>
       
    );
}