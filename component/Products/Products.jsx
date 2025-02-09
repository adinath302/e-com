import React from 'react'
import Heading from '../Services/Heading'
import ProductCard from "../../component/Products/ProductCard.jsx"
// image import
import img1 from "../../assets/product/p-1.jpg"
import img2 from "../../assets/product/p-2.jpg"
import img3 from "../../assets/product/p-3.jpg"
import img4 from "../../assets/product/p-4.jpg"
import img5 from "../../assets/product/p-5.jpg"
import img7 from "../../assets/product/p-7.jpg"
import img9 from "../../assets/product/p-9.jpg"

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: img3,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: img4,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
]

const ProductsData2 = [
    {
        id: 1,
        img: img5,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img7,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: img9,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: img4,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
]

const Products = () => {
    return (
        <div>
            <div className='container'>

                {/* Header section */}
                <Heading
                    title="Our Products"
                    subtitle={"Explore Our Products"}
                />

                {/* body section */}
                <ProductCard data={ProductsData} />
                <ProductCard data={ProductsData2} />
            </div>
        </div>
    )
}

export default Products