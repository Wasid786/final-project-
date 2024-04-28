import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Rating from "../Components/Rating";
import './Home.css';
import API_URL from "../constants";

function ProductDetail() {

    const [product, setproduct] = useState()
    const [user, setuser] = useState()
    console.log(user, "userrrrr")
    const p = useParams()

    useEffect(() => {
        const url = API_URL + '/get-product/' + p.productId;
        axios.get(url)
            .then((res) => {
                if (res.data.product) {
                    setproduct(res.data.product)
                }
            })
            .catch((err) => {
                alert('Server Err.')
            })
    }, [])


    const handleContact = (addedBy) => {
        console.log('id', addedBy)
        const url = API_URL + '/get-user/' + addedBy;
        axios.get(url)
            .then((res) => {
                if (res.data.user) {
                    setuser(res.data.user)
                }
            })
            .catch((err) => {
                alert('Server Err.')
            })
    }

    return (
        <>
        
            <Header />
            {/* <div className="text-3xl font-poppins font-bold ">PRODUCT DETAILS:</div> */}
            <div className="mx-auto mt-10">
               
                {product && (
                    <div className="d-flex justify-evenly">
                        <div className=" ">
                            <img width="400px" height="200px" src={API_URL + '/' + product.pimage} alt="" />
                            {product.pimage2 && <img width="400px" height="200px" src={API_URL + '/' + product.pimage2} alt="" />}
                        </div>
                        <div className="w-1/2">
                            <h6 className="font-bold text-4xl font-poppins font-bold"> Product Details:</h6>
                            <h3 className="m-2 price-text text-[#002f34] mt-4">Rs. {product.price} /-</h3>
                            <p className="m-2 font-bold text-xl"> {product.pname} | {product.category} </p>
                            <p className="m-2 text-success"> {product.pdesc} </p>
                            {product.addedBy && (
                              <button 
                              className="border border-gray-300 rounded-md px-4 py-2 bg-blue-400 text-white hover:bg-blue-600 transition duration-300 ease-in-out"
                              onClick={() => handleContact(product.addedBy)}
                          >
                               CONTACT DETAILS
                          </button>
                          
                            )}
                            {user && user.username && <h4 className="my-2 text-xl">{user.username}</h4>}
                            {user && user.mobile && <h3 className="my-2 text-xl">{user.mobile}</h3>}
                            {user && user.email && <h6 className="my-2 text-xl">{user.email}</h6>}
                        </div>
                    </div>
                )}
            </div>
                 <Rating/>
        </>
    );
}

export default ProductDetail;