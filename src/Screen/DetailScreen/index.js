import { useLocation } from "react-router-dom";
import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import image from "../../Assets/image.jpg";

function DetailScreen() {

    const { state } = useLocation();
    console.log("🚀 ~ DetailScreen ~ state:", state);


    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", textAlign: "center" }}>
                <div style={{ width: '50%', border: '1px solid grey' }}>
                    <img src={state.images[0]} alt="images" />
                </div>
                <div style={{ textAlign: "left", width: '40%', border: '1px solid grey', marginLeft: '2rem', padding: 10 }}>
                    <div style={{ display: "flex" }}>
                        <img style={{ width: 70, height: 70, borderRadius: 70, marginTop: 10 }} src={image} />
                        <h6 style={{ marginLeft: 10, fontWeight: 'bold', marginTop: 5 }}>Muhammad Sheraz</h6><br />
                        <p style={{ fontSize: 'small', marginLeft: -97, marginTop: 35 }}>Member since Feb 2024</p><br />
                        <h6 style={{ marginLeft: -137, marginTop: 65 }}>See profile</h6>
                    </div>
                    <h2>{state.title}</h2>
                    <h6>{state.stock}</h6>
                    <h6>{state.description}</h6>
                    <h3>{`$${state.price}`}</h3>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default DetailScreen;