import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../../Config/Firebase";


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginPress = async () => {
        await LogIn({ email, password }).then((res) => {
            console.log("🚀 ~ awaitLogIn ~ res:", res)
            if (res && res.user) {
                navigate('/');
            }
        }).catch(err => {
            console.log("🚀 ~ awaitLogIn ~ err:", err)
        })
    }

    return (
        <div>

            <center>
                <div style={{ width: 400, background: 'rgba(244, 252, 255, 0.637)', marginTop: 80, border: '20px solid lightgrey' }}>
                    <h1>Log In</h1>
                    <input style={{ width: 300, height: 35, marginBottom: 15, fontSize: 'larger', borderRadius: 5, border: '2px solid black', background: 'rgb(239, 239, 239)' }} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
                    <input style={{ width: 300, height: 35, marginBottom: 80, fontSize: 'larger', borderRadius: 5, border: '2px solid black', background: 'rgb(239, 239, 239)' }} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="password" /><br />

                    <button style={{ width: 310, height: 35, fontWeight: "bold", fontSize: 'large', border: '2px solid black', borderRadius: 5, background: 'rgb(177, 255, 93)', marginBottom: 10 }} onClick={loginPress}>Log In</button>

                    <p>
                        Don't you have an account.
                        <span style={{ fontWeight: "bold", color: "purple", cursor: "pointer" }} onClick={() => navigate('/register')}> Click here</span>
                    </p>
                </div>
            </center>

        </div>
    )
}

export default Login;