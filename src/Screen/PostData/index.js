import { useState } from "react";
import { PostData } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";
import olx2 from "../../Assets/olx2.svg";

function PostDataPage() {

    const navigate = useNavigate();

    const [productName, setProductName] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [price, setPrice] = useState();

    const handlePostData = async () => {
        try {
        await PostData({ productName, description, image, price });
        navigate('/');

        } catch(error) {
        console.log("🚀 ~ handlePostData ~ error:", error);
        }
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: '27rem', maxWidth: '400px', background: 'rgba(244, 252, 255, 0.637)', marginTop: 60, border: '20px solid lightgrey', textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img style={{ width: '100px' }} src={olx2} />
                </div>
            <input style={{ width: '19rem', height: 35, marginBottom: 15, fontSize: 'larger', borderRadius: 5, border: '2px solid black', background: 'rgb(239, 239, 239)' }} placeholder="Product name" onChange={(e) => setProductName(e.target.value)} /><br/>
            <input style={{ width: '19rem', height: 35, marginBottom: 15, fontSize: 'larger', borderRadius: 5, border: '2px solid black', background: 'rgb(239, 239, 239)' }} placeholder="Price" onChange={(e) => setPrice(e.target.value)} /><br/>
            <input style={{ width: '19rem', height: 35, marginBottom: 15, fontSize: 'larger', borderRadius: 5, border: '2px solid black', background: 'rgb(239, 239, 239)' }} placeholder="Description" onChange={(e) => setDescription(e.target.value)} /><br/>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} /><br/>

            {/* <input  type="file"/><br/> */}
            <button style={{ width: '15rem', height: 35, fontWeight: "bold", fontSize: 'large', border: '2px solid black', borderRadius: 5, background: 'rgb(177, 255, 93)', marginBottom: 10 }} 
            onClick={handlePostData}>Post Ad</button>
            </div>

        </div>
    )
}

export default PostDataPage;