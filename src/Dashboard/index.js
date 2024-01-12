import { useEffect, useState } from "react";
import Cards from "../Component/Cards";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import CategoryIcons from "../Component/CategoryIcons";
import ScrollTopButton from "../Component/TopBtn";

function Dashboard() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts();
    }, [])

    function getProducts() {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then(res => {
                setProducts(res.products);
                console.log(res);
            })
    }



    return (
        <div>
            <Navbar />
            <CategoryIcons />
            {products.map(function (item) {
                const { price, title, description, images, id } = item;
                return <Cards price={price} title={title} description={description} images={images} id={id} />
            })}
            <br/>
            <ScrollTopButton />
            <Footer />
        </div>
    )
}

export default Dashboard;