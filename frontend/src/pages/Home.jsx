import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Categories from "./Categories";
import { FaHeart } from "react-icons/fa";
import './Home.css';
import API_URL from "../constants";
import Footer from "./Footer.jsx"
import SpecialProgram from "./SpecialProgram.jsx";
import toast from "react-hot-toast"
import { BsSortDownAlt } from "react-icons/bs";

function Home() {
    const navigate = useNavigate()

    const [products, setProducts] = useState([]);
    const [cproducts, setCProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const url = API_URL + '/get-products';
        axios.get(url)
            .then((res) => {
                if (res.data.products) {
                    setProducts(res.data.products);
                }
            })
            .catch((err) => {
                toast.error('Server Err.')
            })
    }, [])

    const handleSearch = (value) => {
        setSearch(value);
    }

    const handleClick = () => {
        const url = API_URL + '/search?search=' + search + '&loc=' + localStorage.getItem('userLoc');
        axios.get(url)
            .then((res) => {
                setCProducts(res.data.products);
                setIsSearch(true);
            })
            .catch((err) => {
                toast.error('Server Err.')
            })
    }

    const handleCategory = (value) => {
        let filteredProducts = products.filter((item, index) => {
            if (item.category === value) {
                return item;
            }
        })
        setCProducts(filteredProducts)
    }

    const handleLike = (productId, e) => {
        e.stopPropagation();
        let userId = localStorage.getItem('userId');

        if (!userId) {
            toast.error('Please Login first.')
            return;
        }

        const url = API_URL + '/like-product';
        const data = { userId, productId }
        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    toast.success('Liked.')
                }
            })
            .catch((err) => {
                toast.error('Server Err.')
            })
    }

    const handleProduct = (id) => {
        navigate('/product/' + id)
    }

    const handleSort = () => {
        // Toggle sorting order
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);

        // Clone products array
        const sortedProducts = [...products];

        // Sort the cloned array based on price and sortOrder
        sortedProducts.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        // Update state with sorted products
        setProducts(sortedProducts);
    }

    return (
        <div>
            <div>
                <Header search={search} handlesearch={handleSearch} handleClick={handleClick} />

                <div className="flex justify-between">
                    <Categories handleCategory={handleCategory} />
                    <div className='mr-6 text-[#056bc9]' onClick={handleSort}>
                        <BsSortDownAlt size={30} />
                    </div>
                </div>

                <SpecialProgram />
                {isSearch && cproducts &&
                    <h5> SEARCH RESULTS
                        <button className="clear-btn" onClick={() => setIsSearch(false)}> CLEAR </button>
                    </h5>}

                {isSearch && cproducts && cproducts.length === 0 && <h5> No Results Found In Your City </h5>}
                {isSearch && <div className="d-flex justify-content-center flex-wrap">
                    {cproducts && products.length > 0 &&
                        cproducts.map((item, index) => {

                            return (
                                <div key={item._id} className="card m-3 ">
                                    <div onClick={() => handleLike(item._id)} className="icon-con">
                                        <FaHeart className="icons" />
                                    </div>
                                    <img className="" width="300px" height="200px" src={API_URL + '/' + item.pimage} />

                                    <p className="m-2"> {item.pname}  | {item.category} </p>
                                    <h3 className="m-2 text-danger"> {item.price} </h3>
                                    <p className="m-2 text-success "> {item.pdesc} </p>
                                </div>
                            )

                        })}
                </div>}

                {!isSearch && <div className="d-flex justify-content-center flex-wrap">
                    {products && products.length > 0 &&
                        products.map((item, index) => {

                            return (
                                <div onClick={() => handleProduct(item._id)} key={item._id} className="card m-3 
                            cursor-pointer  rounded-lg 
                            transform transition duration-500 
                            hover:scale-110">
                                    <div onClick={(e) => handleLike(item._id, e)} className="icon-con">
                                        <FaHeart className="icons" />
                                    </div>
                                    <img width="250px" height="150px" src={API_URL + '/' + item.pimage} />
                                    <h3 className="m-2 price-text"> Rs. {item.price} /- </h3>
                                    <p className="m-2"> {item.pname}  | {item.category} </p>
                                    <p className="m-2 text-success"> {item.pdesc.split(' ').slice(0, 4).join(' ')}....
                                    </p>

                                </div>
                            )

                        })}
                </div>}


            </div>
            <Footer />
        </div>
    )
}

export default Home;
