import { useNavigate } from "react-router-dom";
import heart from "../../Assets/heart.svg";

function Cards({ price, title, description, images, id }) {

    const navigate = useNavigate();

    return (
        <div style={{ display: "inline-flex" }}>
            <div onClick={() => navigate(`/DetailScreen/${id}`)} style={{ width: '17rem', margin: 6, borderRadius: 10, border: '2px solid grey', height: 500 }}>
                <img style={{ width: '17rem', height: 200, borderTopLeftRadius: 7, borderTopRightRadius: 7, borderBottom: '1px solid grey' }} src={images[0]} className="card-img-top" alt="alt" />
                <div style={{ width: '15rem', textAlign: "left", padding: 10, marginTop: -30 }}>
                    <h5 style={{textAlign: "right", display: "flex"}}> ${price} <img style={{marginLeft: '11rem'}} src={heart} alt="heart img" /> </h5>
                     <h5>{title}</h5>
                    <p style={{ fontSize: 16 }}>{description}</p>
                    {/* <button style={{width: 100}}><a href="#">Go somewhere</a></button> */}
                </div>
            </div>
        </div>
    )
}

export default Cards;