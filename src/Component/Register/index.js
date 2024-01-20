import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../Config/Firebase";
import ulx from "../../Assets/ulx.svg";

function Register() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signup = async () => {
        try {
            await register({ fullname, age, email, password });
            navigate('/Login')
        } catch (error) {
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: '27rem', maxWidth: '400px', background: 'rgba(244, 252, 255, 0.637)', marginTop: 60, border: '20px solid lightgrey', textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img style={{ width: '50px' }} src={ulx} /><h2>Register</h2>
                </div>

                <input style={{ width: '19rem', height: 35, marginBottom: 15, fontSize: 'larger', borderRadius: 5, border: '2px solid black', background: 'rgb(239, 239, 239)' }} placeholder="fullname" onChange={(e) => setFullname(e.target.value)} /><br />
                <input style={{ width: '19rem', height: 35, marginBottom: 15, fontSize: 'larger', borderRadius: 5, border: '2px solid black', background: 'rgb(239, 239, 239)' }} placeholder="age" onChange={(e) => setAge(e.target.value)} /><br />
                <input style={{ width: '19rem', height: 35, marginBottom: 15, fontSize: 'larger', borderRadius: 5, border: '2px solid black', background: 'rgb(239, 239, 239)' }} placeholder="email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input style={{ width: '19rem', height: 35, marginBottom: 15, fontSize: 'larger', borderRadius: 5, border: '2px solid black', background: 'rgb(239, 239, 239)', marginBottom: 50 }} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} /><br />

                <button style={{ width: '19rem', height: 35, fontWeight: "bold", fontSize: 'large', border: '2px solid black', borderRadius: 5, background: 'rgb(177, 255, 93)', marginBottom: 10 }}
                    onClick={signup}>Register</button>

                <p>
                    Already have an account.
                    <span style={{ fontWeight: "bold", color: "purple", cursor: "pointer" }} onClick={() => navigate('/login')}> Login</span>
                </p>
            </div>

        </div>
    )

}

export default Register;