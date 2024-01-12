import olx1 from '../../Assets/olx1.svg';
import olx2 from "../../Assets/olx2.svg";
import car from "../../Assets/car-front.svg";
import building from "../../Assets/building.svg";
import search from "../../Assets/search.svg";
import sellicon from "../../Assets/sellicon.svg";


function Navbar() {
    return (
        <div>
            <div style={{ height: '8rem', }}></div>

            <nav style={{ backgroundColor: "rgb(241, 239, 239)", position: 'fixed', top: 0, width: '100%', height: '7.5rem' }}>
                <div style={{ display: "flex", paddingLeft: '5rem' }}>

                    <img style={{ width: 40, marginLeft: 40, }} src={olx1} ></img>

                    <img style={{ marginLeft: '2rem' }} src={car} ></img>
                    <p style={{ color: 'black' }}> MOTORS </p>
                    <img style={{ marginLeft: '2rem' }} src={building} ></img>
                    <p style={{ color: 'black' }}> PROPERTY </p>
                </div>
                <div style={{ display: "flex", paddingLeft: '7rem', paddingBottom: 5 }}>
                    <img style={{ width: 60, marginBottom: 25 }} src={olx2} ></img>
                    <input style={{ width: '15rem', height: '2.3rem', marginLeft: 20, marginTop: 6, border: '2px solid black', borderRadius: 5, }} placeholder="Pakistan" ></input>

                    <input style={{ width: '26rem', height: '2.3rem', marginLeft: 18, marginTop: 6, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, border: '2px solid black' }} placeholder="Find Cars, Mobile Phones and more..." ></input>
                    <img style={{ background: 'black', width: 40, height: 42.5, marginTop: 6, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} src={search} ></img>
                    <h3 style={{ marginLeft: '2rem', marginTop: 5, color: 'black' }} ><u>Login</u></h3>

                    <img style={{ marginLeft: 15, marginTop: -33 }} src={sellicon} ></img>

                </div>


            </nav>
            <div style={{ display: "flex", padding: '15px' }}>
                <p style={{ margin: "0 8px" }}>ALL catogary</p>
                <p style={{ margin: "0 8px" }}> Mobile Phones</p>
                <p style={{ margin: "0 8px" }}>Car</p>
                <p style={{ margin: "0 8px" }}>Motorscycle</p>
                <p style={{ margin: "0 8px" }}>Houses</p>
                <p style={{ margin: "0 8px" }}>Video-Audios</p>
                <p style={{ margin: "0 8px" }}>Tablets</p>
                <p style={{ margin: "0 8px" }}>Land&Plots</p>
            </div>
            <img style={{width: '95%'}} src='https://images.olx.com.pk/thumbnails/295176473-800x600.webp' alt='ad Image'/>
        </div>
    )
}

export default Navbar;