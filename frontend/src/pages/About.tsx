import { Link } from "react-router-dom";
import { Sidebar } from "../layout/Sidebar";

export function About() {
    return (
        
        <div>
            <Sidebar>
                <h1>About Sidebar</h1>
                <Link to="/">Home</Link>
            </Sidebar>
            
            <h1>About</h1>
            <Link to="/">Home</Link>
        </div>
       
    );
}