import { useEffect, useState } from "react";
import Cards from "../Component/Cards";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function Dashboard() {
    const [products , setProducts] = useState([]);


    useEffect(() => {
        getProducts();
    } , [])

    function getProducts(){
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then(res => {
            setProducts(res.products);
            console.log(res);
        })
    }



    return ( 
        <div>
            <Navbar/>
            {products.map(item => {
                const {price, title, description, images, id} = item;
                return <Cards price={price} title={title} description={description} images={images} id={id}/>
            })}
            <Footer/>
        </div>
    )
}

export default Dashboard;