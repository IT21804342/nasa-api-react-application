import { Route, Routes, Navigate } from "react-router-dom";
import Nasa from "./components/Nasa";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Apod from "./components/Apod"
import Rover from "./components/Rover"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
    const user = localStorage.getItem("token");

    return (
        <Routes>
            {user && <Route path="/" exact element={<Nasa />} />}
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/apod" exact element={<Apod />} />
            <Route path="/rover" exact element={<Rover />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
    );
}

export default App;