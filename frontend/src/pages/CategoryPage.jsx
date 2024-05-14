import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import Categories from "./Categories";
import { FaHeart } from "react-icons/fa";
import './Home.css';
import API_URL from "../constants";
import toast from "react-hot-toast";

function CategoryPage() {

    const navigate = useNavigate();
    const param = useParams();
    const [products, setProducts] = useState([]);
    const [cproducts, setCProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        const url = API_URL + '/get-products?catName=' + param.catName;
        axios.get(url)
            .then((res) => {
                if (res.data.products) {
                    setProducts(res.data.products);
                }
            })
            .catch((err) => {
                toast.error('Server Err.');
            });
    }, [param]);

    const handleSearch = (value) => {
        setSearch(value);
    };

    const handleClick = () => {
        const url = API_URL + '/search?search=' + search + '&loc=' + localStorage.getItem('userLoc');
        axios.get(url)
            .then((res) => {
                setCProducts(res.data.products);
                setIsSearch(true);
            })
            .catch((err) => {
                toast.error('Server Err.');
            });
    };

    const handleCategory = (value) => {
        let filteredProducts = products.filter((item) => item.category === value);
        setCProducts(filteredProducts);
    };

    const handleLike = (productId) => {
        let userId = localStorage.getItem('userId');
        const url = API_URL + '/like-product';
        const data = { userId, productId };
        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    toast.success('Liked.');
                }
            })
            .catch((err) => {
                toast.error('Server Err.');
            });
    };

    const handleProduct = (id) => {
        navigate('/product/' + id);
    };

    // Sorting function to sort products by price in ascending order
    const sortProductsByPrice = (products) => {
        return products.sort((a, b) => a.price - b.price);
    };

    return (
        <div>
            <Header search={search} handlesearch={handleSearch} handleClick={handleClick} />
            <Categories handleCategory={handleCategory} />
            <div className="text-3xl ml-3">Search Category </div>

            {isSearch && cproducts &&
                <h5> SEARCH RESULTS
                    <button className="clear-btn" onClick={() => setIsSearch(false)}> CLEAR </button>
                </h5>}

            {isSearch && cproducts && cproducts.length === 0 && <h5> No Results Found In Your City </h5>}
            {isSearch && <div className="d-flex justify-content-center flex-wrap">
                {cproducts && cproducts.length > 0 &&
                    sortProductsByPrice(cproducts).map((item, index) => (
                        <div key={item._id} className="card m-3 ">
                            <div onClick={() => handleLike(item._id)} className="icon-con">
                                <FaHeart className="icons" />
                            </div>
                            <img width="300px" height="200px" src={API_URL + '/' + item.pimage} />

                            <p className="m-2"> {item.pname}  | {item.category} </p>
                            <h3 className="m-2 text-danger"> {item.price} </h3>
                            <p className="m-2 text-success"> {item.pdesc} </p>
                        </div>
                    ))}
            </div>}

            {!isSearch && <div className="d-flex justify-content-center flex-wrap">
                {products && products.length > 0 &&
                    sortProductsByPrice(products).map((item, index) => (
                        <div onClick={() => handleProduct(item._id)} key={item._id} className="card m-3">
                            <div onClick={() => handleLike(item._ijd)} className="icon-con">
                                <FaHeart className="icons" />
                            </div>
                            <img width="250px" height="150px" src={API_URL + '/' + item.pimage} />
                            <h3 className="m-2 price-text"> Rs. {item.price} /- </h3>
                            <p className="m-2"> {item.pname}  | {item.category} </p>
                            <p className="m-2 text-success"> {item.pdesc} </p>
                        </div>
                    ))}
            </div>}
        </div>
    );
}

export default CategoryPage;
