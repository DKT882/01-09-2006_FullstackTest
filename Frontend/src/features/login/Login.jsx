import Button from "../../shared/Button"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5001/login",
                {
                    email,
                    password
                }
            );
            console.log(response.data);
            navigate("/events");
        } catch (error) {
            setError(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div>
            <form className="Login_Form" onSubmit={login}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button btnTitle="Login" />
                {error && (
                    <p style={{ color: "red" }}>
                        {error}
                    </p>
                )}
            </form>
        </div>
    )
}

export default Login
