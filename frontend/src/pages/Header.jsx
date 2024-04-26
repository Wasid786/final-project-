import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../assets/home.png"
import { MdAlternateEmail } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";

function Header(props) {

    const [loc, setLoc] = useState(null)
    const [showOver, setshowOver] = useState(false)

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/login');
    }

    let locations = [
        {
            "latitude": 28.6139,
            "longitude": 77.2090,
            "placeName": "  ---Select City----"
        },
        
        {
            "latitude": 27.8815411,
            "longitude": 78.06902138888888,
            "placeName": "Aligarh, Uttar Pradesh"
        },
        {
            "latitude": 19.0760,
            "longitude": 72.8777,
            "placeName": "Mumbai, Maharashtra"
        },
    ]

    return (
        <div className='header-container d-flex justify-content-between'>

            <div className="header flex ">
                    <div className='w-12 mr-5'> <Link className='links' to="/">  <img src={Logo} alt="Home" /> </Link>
                </div>
                <select 
    value={loc} 
    onChange={(e) => {
        localStorage.setItem('userLoc', e.target.value)
        setLoc(e.target.value)
    }}
    className="border border-blue-500  bg-white  rounded-md shadow-base p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>
    {
        locations.map((item, index) => {
            return (
                <option key={index} value={`${item.latitude},${item.longitude}`}>
                    {item.placeName}
                </option>
            )
        })
    }
</select>


                <input className='search'
                    type='text'
                    value={props && props.search}
                    onChange={(e) => props.handlesearch && props.handlesearch(e.target.value)
                    }
                />
                <button className='search-btn' onClick={() => props.handleClick && props.handleClick()} >
                     <FaSearch /> </button>
            </div>

            <div className='flex item-center space-evenly gap-4 text-[#002f34] '>
      <div>  
            <Link to="/contact"><MdAlternateEmail size={30} color='[#fff]'/> </Link>
      </div>
     <div> <Link to="/about">
  <BsInfoCircleFill className='' size={30} />
</Link></div>






                <div className='text-white w-10 h-10 flex justify-center   bg-[#002f34] rounded-full   '
                    onClick={() => {
                        setshowOver(!showOver)
                    }}
                    // style={{
                    //     display: 'flex',
                    //     justifyContent: 'center',
                    //     alignItems: 'center',
                    //     background: '#002f34',
                    //     width: '40px',
                    //     height: '40px',
                    //     color: '#fff',
                    //     fontSize: '14px',
                    //     borderRadius: '50%'
                    // }} 
                    >  <BsPersonCircle size={35}/> </div>

                {showOver && <div style={{
                    minHeight: '100px',
                    width: '200px',
                    background: '#eee',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    zIndex: 1,
                    marginTop: '50px',
                    marginRight: '50px',
                    color: 'red',
                    fontSize: '14px',
                    background: '#002f34',
                    borderRadius: '7px'
                }}>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/add-product">
                                <button className="logout-btn">ADD PRODUCT  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/liked-products">
                                <button className="logout-btn"> FAVOURITES  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/my-products">
                                <button className="logout-btn">MY ADS  </button>
                            </Link>
                            }
                    </div>
                    <div>
                        {!localStorage.getItem('token') ?
                            <Link to="/login">  LOGIN </Link> :
                            <button className='logout-btn' onClick={handleLogout}> LOGOUT </button>}
                    </div>



                </div>}
            </div>

        </div>
    )
}


export default Header;