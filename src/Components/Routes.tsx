import { Routes, Route } from "react-router-dom"
import { Launches } from "./Launches";
import { LaunchDetails } from "./LaunchDetails";

export const MyRouter = () => {
    return <Routes>
        <Route path="/" element={<Launches />} />
        <Route path=":launchid" element={<LaunchDetails />} />
        <Route path="*" element={<h1>404</h1>} />
    </Routes>
}