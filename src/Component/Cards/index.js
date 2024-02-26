// import { useNavigate } from "react-router-dom";
// import heart from "../../Assets/heart.svg";

// function Cards(props) {

//     const { price, title, description, imageUrl, id } = props.item;
//     const navigate = useNavigate();

//     const handleCardPress = (e) => {
//         navigate(`/DetailScreen/${id}`, { state: e });
//     }

//     return (
//         <div style={{ display: "inline-flex" }}>
//             <div onClick={() => handleCardPress(props)} style={{ width: '17rem', margin: 6, borderRadius: 10, border: '2px solid grey', height: 420 }}>

//                 {imageUrl ?
//                 <img style={{ width: '17rem', height: 200, borderTopLeftRadius: 7, borderTopRightRadius: 7, borderBottom: '1px solid grey' }} src={imageUrl} className="card-img-top" alt="alt" />
//                 : null }
//                 <div style={{ width: '15rem', textAlign: "left", padding: 10, marginTop: -30 }}>
//                     <h5 style={{ textAlign: "right", display: "flex" }}> ${price} <img style={{ marginLeft: '11rem' }} src={heart} alt="heart img" /> </h5>
//                     <h5>{title}</h5>
//                     <p style={{ fontSize: 16 }}>{description}</p>
//                     {/* <button style={{width: 100}}><a href="#">Go somewhere</a></button> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cards;



import { useNavigate } from "react-router-dom";

function Cards(props) {
    const navigate = useNavigate();
    const { description, imageUrl,  id, productName, price } = props.item;
    console.log("🚀 ~ Cards ~ imageUrl:", imageUrl)
    // title,
    const HandleCardPress = (e) => {
        navigate(`/DetailScreen/${id}`, { state: e });
    }

    return (
        <div  onClick={() => HandleCardPress(props)} style={{ display: "inline-flex", marginBottom: 20, margin: 10, cursor: "pointer" }}  >
            <div className="Cards" style={{ borderRadius: 5, height: 400, border: '1px solid rgb(199, 196, 196)' }}>
                {imageUrl && imageUrl.length ?
                    <img style={{ width: '17.3rem', height: 200, borderRadius: 5, borderBottom: '1px solid rgb(180, 190, 190)' }} src={imageUrl[0]} className="card-img-top" alt="alt" />
                    : null}
                       {/* {imageUrl && imageUrl.map((url, index) => (
                    <img key={index} style={{ width: '17.3rem', height: 200, borderRadius: 5, borderBottom: '1px solid rgb(180, 190, 190)' }} src={url} className="card-img-top" alt={`Image-${index}`} />
                ))} */}
                <div style={{ width: "16rem", height: 200, textAlign: "left", paddingLeft: 10, marginTop: -10 }}>
                    <h4>Rs. {price} <img style={{ paddingLeft: '10rem' }} /></h4>
                    <p>{productName}</p>
                    <p style={{ fontSize: 15 }}>{description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards;