import { Link } from "react-router-dom";
import { Sidebar } from "../layout/Sidebar";

export function Home() {
    return (
        
        <div>
            <Sidebar>
                <h1>Home Sidebar</h1>
                <Link to="/about">About</Link>
            </Sidebar>

            <h1>Home</h1>
            <Link to="/about">About</Link>
        </div>
       
    );
}