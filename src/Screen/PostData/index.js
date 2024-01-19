import { useState } from "react";
import { PostData } from "../../Config/Firebase";

function PostDataPage() {

    const [productName, setProductName] = useState();
    const [description, setDescription] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();

    const handlePostData = () => {
        PostData({ productName, description, quantity, price });
    }


    return (
        <div>
            <input placeholder="Product name" onChange={(e) => setProductName(e.target.value)} />
            <input placeholder="Price" onChange={(e) => setDescription(e.target.value)} />
            <input placeholder="Description" onChange={(e) => setQuantity(e.target.value)} />
            <input placeholder="Quantity" onChange={(e) => setPrice(e.target.value)} />

            <button onClick={handlePostData}>Post</button>

        </div>
    )
}

export default PostDataPage;