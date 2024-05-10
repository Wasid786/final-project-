import React from 'react'
import payment from "../assets/payment.jpg"
import ContactContentSection from '../Components/ContactContentSection'
import ContactReviews from '../Components/ContactReviews'

const Contact = () => {
    return (
        <div>
            <div className='flex  mx-auto'>
                <div className='md:w-2/3 w-1/2 md:h-[350px] h-[300px] bg-white-400  px-4'>
                    <div className='text-black '>
                        <div className='font-bold md:text-4xl text-base  ml-5 md:pt-5 pt-2 mb-2 md:mb-5 '> Company Information</div>
                        <div className=' ml-5 md:text-2xl text-sm text-blue-500 '>

                            <div className='text-blue-500 font-bold'>Purrfect</div>
                            <div className='md:mt-1 text-blue-500'>
                                <div> Opp. Jama Masjid Upper Fort Aligarh-202001</div>
                                <div className='mt-1'> Mob: +91 9389746454</div>
                            </div>
                            <div>
                                <div className='font-bold md:text-3xl text-base text-black  md:pt-5 mt-2 md:mb-5'>
                                    For any queries  please contact:
                                </div>
                                <div>
                                    <div className='font-bold' > Mr.Wasid Ansari <span className=' ml-2 text-sm font-bold'>(Director)</span></div>

                                    <div> E-mail: wasidansari5284@gmail.com, madara21cabsa342@gmail.com</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:w-1/3 w-1/2  flex flex-col justify-center items-center'>
                    <div className='font-bold md:text-3xl text-2xl   md:pt-5 pt-2 mb-3'>You Can Donate Us Here! </div>
                    <div className='w-[190px] md:w-[200px] mx-auto'>
                        <img src={payment} alt="" />
                    </div>
                </div>
            </div>


            <ContactContentSection/>
            <ContactReviews />
        </div>
    )
}

export default Contact
