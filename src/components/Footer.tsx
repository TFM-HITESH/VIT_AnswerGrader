import React from "react";
import { IoIosHeart } from "react-icons/io";
import Image from 'next/image'


const Footer = () => {
    return (
        <footer className="bg-grey-50 border-t border-b">
            <div className="text-center xsm:text-xs sm:text-sm text-black">
                        <div className="flex justify-around py-6 leading-5 xsm:px-2">
                        <Image
                                src="/fav.png"
                                alt="logo"
                                width={14}
                                height={7}
                                quality={400}
                                className="rounded-md xsm:hidden sm:flex bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                            />
                            <div className="flex">
                                <ul>
                                <h2 className=" text-base font-semibold">Menu</h2>
                                <li>Home</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                </ul>
                               
                            </div>
                            <div className="flex">
                                <ul>
                                <h2 className=" text-base font-semibold">Services</h2>
                                <li>Content Strategy</li>
                                <li>Content Development</li>
                                <li>Content Creation</li>
                                <li>Content Optimazion</li>
                                </ul>
                               
                            </div>
                            <div className="flex">
                                <ul>
                                <h2 className=" text-base font-semibold">Menu</h2>
                                <li>Terms of Use</li>
                                <li>Privacy Notice</li>
                                <li>Cookies</li>
                                
                                </ul>
                               
                            </div>
                        </div>
                        
                <p className="tracking-widest">&copy; 2024 QuickGrader Inc. All rights reserved.</p>
                <p className="ml-1 flex justify-center items-center tracking-widest">Made with <IoIosHeart size={11} className="mr-1" /> by Team2</p>
            </div>
        </footer>
    );
};

export default Footer;
