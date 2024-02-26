import { useLocation } from "react-router-dom";
import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import image from "../../Assets/image.jpg";

function DetailScreen() {

    const { state } = useLocation();
    const {imageUrl, price, title, description, stock} = state.item ||{}
    console.log("🚀 ~ DetailScreen ~ state:", state)

    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", textAlign: "center" }}>
             {imageUrl ?   <div style={{ width: '50%', border: '1px solid grey' }}>
                    <img src={imageUrl[0]} alt="images" />
                </div>: null}
                <div style={{ textAlign: "left", width: '40%', border: '1px solid grey', marginLeft: '2rem', padding: 10 }}>
                    <div style={{ display: "flex" }}>
                        <img style={{ width: 70, height: 70, borderRadius: 70, marginTop: 10 }} src={image} />
                        <h6 style={{ marginLeft: 10, fontWeight: 'bold', marginTop: 5 }}>Muhammad Sheraz</h6><br />
                        <p style={{ fontSize: 'small', marginLeft: -97, marginTop: 35 }}>Member since Feb 2024</p><br />
                        <h6 style={{ marginLeft: -137, marginTop: 65 }}>See profile</h6>
                    </div>
                    <h2>{title}</h2>
                    <h6>{stock}</h6>
                    <h6>{description}</h6>
                    <h3>{`$${price}`}</h3>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default DetailScreen;