import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import CRUD from "../pages/CRUD";
import Table from "../components/Table";
import { CategoryTable } from "../components/CategoryTable";

export default function MainRoutes() {
    return (
        <div>

            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="movie" element={<CRUD />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="category" element={<CategoryTable />} />
                        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
