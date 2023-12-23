import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialYoutube } from "react-icons/sl";





const Dashboard_footer = () => {
    const [showForm, setShowForm] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [showSocialFields, setShowSocialFields] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', contact: '', instagramLink: '', youtubeLink: '', });

    const handleIconClick = () => {
        // Toggle the visibility of the Form
        setShowForm(!showForm);
    };

    const handleUserInfoClick = () => {
        // Toggle the visibility of the Form
        setUserInfo(!userInfo);
    };

    const handleBasicInfoClick = () => {
        setShowSocialFields(false);
    };

    const handleSocialInfoClick = () => {
        setShowSocialFields(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log(name,value,e.target)
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        // console.log(formData)
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        handleIconClick()
        handleUserInfoClick()
        // Access formData to get the form data
        // console.log(e)
        // console.log('Form Data:', formData);
        // You can send the data to a server or perform other actions here
    };

    const buttonClassesBasic = `font-medium px-10 py-2 mr-1 ${showSocialFields ? 'border-b-4 border-gray-500' : 'border-b-4  border-[#286DE0]'}`;
    const buttonClassesSocial = `font-medium px-10 py-2 ${showSocialFields ? 'border-b-4 border-[#286DE0] ' : 'border-b-4 border-gray-500'}`;



    return (
        <>
            <div className='flex flex-col items-center justify-center w-full h-full'>

                {!userInfo && (

                    <>
                        <div onClick={handleIconClick} className='cursor-pointer'>
                            <IoIosAddCircleOutline size={40} />
                        </div>
                        <div className='text-2xl cursor-pointer' onClick={handleIconClick}>
                            Add Profile
                        </div>
                    </>

                )}

                {userInfo && (

                    <div className='w-full h-full xs:p-1 sm:p-2'>
                        <div className='flex w-full h-full flex-col'>
                            <div className='w-full xs:h-[30%] sm:h-2/5 flex xs:px-4 sm:px-20  items-center justify-content font-bold'>
                                <div className='w-1/2'>
                                    <p>{formData.name}</p>
                                </div>
                                <div className='w-1/2'>
                                    <button onClick={() => handleIconClick()}  >
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                            <div className='flex xs:flex-col sm:flex-row w-full xs:h-[70%] sm:h-3/5 xs:px-4 sm:px-20 justify-between '>

                                <div className='flex flex-col w-1/2 xs:h-1/2 sm:h-full '>
                                    <div className='h-1/2 flex items-center '>
                                        <div className='mr-4 cursor-pointer'>
                                            <FaWhatsapp className='text-green-400' />
                                        </div>
                                        <div className='underline cursor-pointer'>
                                            {formData.contact}
                                        </div>
                                    </div>

                                    <div className='h-1/2 flex items-center'>
                                        <div className='mr-4 cursor-pointer'>
                                            <MdOutlineEmail className='text-purple-400 ' />
                                        </div>
                                        <div className='underline cursor-pointer'>
                                            {formData.email}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col w-1/2  xs:h-1/2 sm:h-full'>
                                    <div className='h-1/2 flex items-center'>
                                        <div className='mr-4 cursor-pointer'>
                                            <FaInstagram className='text-rose-400	' />
                                        </div>
                                        <div className='underline cursor-pointer'>
                                            {formData.instagramLink}
                                        </div>
                                    </div>

                                    <div className='h-1/2 flex items-center'>
                                        <div className='mr-4 cursor-pointer'>
                                            <SlSocialYoutube className='text-rose-400' />
                                        </div>
                                        <div className='underline cursor-pointer'>
                                            {formData.youtubeLink}
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                )}



                {showForm && (
                    <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center'>
                        <div className='bg-white px-4 py-6 rounded-xl xs:4/5 sm:w-2/5'>

                            <div className='flex justify-between items-center border-b-2 pb-2'>

                                <p className='text-base font-bold'>Add New Profile</p>
                                <button onClick={() => setShowForm(false)}>
                                    <IoMdClose size={20} />
                                </button>

                            </div>

                            <div className='flex justify-between items-center '>

                                <button onClick={() => handleBasicInfoClick()} className={buttonClassesBasic} >
                                    Basic
                                </button>
                                <button onClick={() => handleSocialInfoClick()} className={buttonClassesSocial} >
                                    Social
                                </button>

                            </div>

                            <form className="mt-2" onSubmit={handleSubmit}>

                                {!showSocialFields && (
                                    <>
                                        <div className="my-3">
                                            <label className="block  text-sm my-2 font-normal">
                                                Enter Name*
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className=" outline-none border rounded w-full py-1 px-3"
                                                placeholder="Enter your name ..."
                                            />
                                        </div>

                                        <div className="my-3">
                                            <label className="block text-sm my-2 font-normal">
                                                Enter Email*
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className=" outline-none border rounded w-full py-1 px-3"
                                                placeholder="Enter your email..."
                                            />
                                        </div>

                                        <div className="my-3">
                                            <label className="block text-sm my-2 font-normal">
                                                Enter Phone*
                                            </label>
                                            <input
                                                type="tel"
                                                name="contact"
                                                value={formData.contact}
                                                onChange={handleInputChange}
                                                className=" outline-none border rounded w-full py-1 px-3"
                                                placeholder="Enter your Phone number..."
                                            />
                                        </div>

                                        <div className='flex justify-end items-center my-4'>

                                            <button onClick={() => handleSocialInfoClick()} className="bg-[#286DE0] text-white rounded-md px-4 py-2 font-sans" >
                                                Next
                                            </button>

                                        </div>
                                    </>
                                )}

                                {showSocialFields && (
                                    <>
                                        <div className="my-3">
                                            <label className="block text-sm my-2 font-normal">
                                                Instagram Link <span className='text-gray-400'>(Optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="instagramLink"
                                                value={formData.instagramLink}
                                                onChange={handleInputChange}
                                                className=" outline-none border rounded w-full py-1 px-3"
                                                placeholder="Enter your Instagram link..."
                                            />
                                        </div>

                                        <div className="my-3">
                                            <label className="block text-sm my-2 font-normal">
                                                YouTube Link <span className='text-gray-400'>(Optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="youtubeLink"
                                                value={formData.youtubeLink}
                                                onChange={handleInputChange}
                                                className=" outline-none border rounded w-full py-1 px-3"
                                                placeholder="Enter your YouTube link..."
                                            />
                                        </div>

                                        <div className='flex justify-end items-center my-4'>

                                            <button onClick={() => handleBasicInfoClick()} className="border border-current rounded-md px-4 py-2 font-sans mr-4" >
                                                Back
                                            </button>

                                            <button type="submit" className="bg-[#286DE0] text-white rounded-md px-4 py-2 font-sans" >
                                                Done
                                            </button>

                                        </div>

                                    </>
                                )}

                            </form>


                        </div>

                    </div>
                )}

            </div>
        </>
    )
}

export default Dashboard_footer
