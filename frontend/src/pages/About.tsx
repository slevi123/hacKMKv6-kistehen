import { Link } from "react-router-dom";
import { Layout } from "../Layout";

export function About() {
    return (
        <Layout>
        <div>
            <h1>About</h1>
            <Link to="/">Home</Link>
        </div>
        </Layout>
    );
}