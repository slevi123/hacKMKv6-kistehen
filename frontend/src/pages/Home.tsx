import { Link } from "react-router-dom";
import { Layout } from "../Layout";

export function Home() {
    return (
        <Layout>
        <div>
            <h1>Home</h1>
            <Link to="/about">About</Link>
        </div>
        </Layout>
    );
}