import { Link } from "react-router-dom";
import { Sidebar } from "../layout/Sidebar";
import { RouteList } from "../layout/RoutesList";

export function About() {
    return (
        
        <div>
            <Sidebar>
              

                {/* <Link to="/">Home</Link> */}
                <RouteList />
            </Sidebar>
            

            <Link to="/">Home</Link>
        </div>
       
    );
}