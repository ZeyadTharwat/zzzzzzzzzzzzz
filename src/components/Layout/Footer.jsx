// @ts-nocheck
import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import logoSmall from "../../assets/images/logo.svg";
import logoLarge from "../../assets/images/logo-large.svg";
import facebookLogoSmall from "../../assets/images/facebook-logo-small.png";
import facebookLogoLarge from "../../assets/images/facebook-logo-large.png";
import linkedInLogoSmall from "../../assets/images/linked-in-logo-small.png";
import linkedInLogoLarge from "../../assets/images/linked-in-logo-large.png";
import twitterLogoSmall from "../../assets/images/twitter-logo-small.png";
import twitterLogoLarge from "../../assets/images/twitter-logo-large.png";
import { HashLink } from "react-router-hash-link";
import { NavLink as RouterNavLink } from "react-router-dom";

const Footer = () => {
    const footerlist1 = [{title:'Home',link:'/'}, {title:'Offers',link:'/#offers'}, {title:'Vision',link:'/#vision'}, {title:'Trading University',link:'/#trading'},{title:'Team',link:'/#team'},];
    const footerlist2 = [{title:'Privacy And Policy',link:'/'}, {title:'Careers',link:'/'}, {title:'Terms & Condition',link:'/'}];

    if (true)
        return (
            <>
                <div className=" lg:container border-t  border-black mt-12 pt-0.5">
                    <div className="px-4 py-31px flex flex-col md:hidden">
                        <div className="flex justify-between pb-10">
                            <img src={logoSmall} />
                            <div className="flex items-center">
                                <a href="">
                                    <img
                                        src={facebookLogoSmall}
                                        className="pr-4"
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src={linkedInLogoSmall}
                                        className="pr-4"
                                    />
                                </a>
                                <a href="" >
                                    <img src={twitterLogoSmall} />
                                </a>
                            </div>
                        </div>
                        <div className="flex pb-16">
                            <div className="flex flex-col font-mukta text-base w-1/2">
                                <RouterNavLink
                                    to="/"
                                    className="pb-3 mb-0.5 font-semibold text-black"
                                >
                                    <span>Page Links</span>
                                </RouterNavLink>
                                {footerlist1.map((el)=>{
                                    return <HashLink
                                    to={el.link}
                                    className="hover:text-light-blue hover:pl-2.5 hover:transition-all hover:ease-out hover:duration-300 transition-all ease-out duration-300 pb-1.5 text-project-light-gray"
                                >
                                    <span>{el.title}</span>
                                    
                                </HashLink>
                                })}
                                <RouterNavLink
                                    to="/contact-us"
                                    className="hover:text-light-blue hover:pl-2.5 hover:transition-all hover:ease-out hover:duration-300 transition-all ease-out duration-300 pb-1.5 text-project-light-gray"
                                >
                                    <span>Contact Us</span>
                                </RouterNavLink>
                            </div>
                            <div className="flex flex-col font-mukta text-base ">
                                <span className="pb-3 mb-0.5 font-semibold text-black">
                                    More Info
                                </span>
                                {footerlist2.map((el)=>{
                                    return <HashLink
                                    to={el.link}
                                    className="hover:text-light-blue hover:pl-2.5 hover:transition-all hover:ease-out hover:duration-300 transition-all ease-out duration-300 pb-1.5 text-project-light-gray"
                                >
                                    <span>{el.title}</span>
                                </HashLink>
                                })}
                            </div>
                        </div>
                        <div className="flex justify-between font-mukla text-sm text-project-black">
                            <p>© Copyright 2022</p>
                            <p>All rights reserved</p>
                        </div>
                    </div>
                    <div className="px-[50px] lg:px-20 xl:px-100px py-10 lg:py-11 hidden md:flex flex-col">
                        <div className="flex justify-between items-start">
                            <img src={logoLarge} />
                            <div className="flex flex-col font-mukta text-base ">
                                <RouterNavLink
                                    to="/"
                                    className="pb-3 mb-0.5 font-semibold text-black"
                                >
                                    <span>Page Links</span>
                                </RouterNavLink>
                                {footerlist1.map((el)=>{
                                    return <HashLink
                                    to={el.link}
                                    className="hover:text-light-blue hover:pl-2.5 hover:transition-all hover:ease-out hover:duration-300 transition-all ease-out duration-300 pb-1.5 text-project-light-gray"
                                >
                                    <span>{el.title}</span>
                                    
                                </HashLink>
                                })}
                                <RouterNavLink
                                    to="/contact-us"
                                    className="hover:text-light-blue hover:pl-2.5 hover:transition-all hover:ease-out hover:duration-300 transition-all ease-out duration-300 pb-1.5 text-project-light-gray"
                                >
                                    <span>Contact Us</span>
                                </RouterNavLink>


                            </div>
                            <div className="flex flex-col font-mukta text-base ">
                                <span className="pb-3 mb-0.5 font-semibold text-black">
                                    More Info
                                </span>
                                {footerlist2.map((el)=>{
                                    return <HashLink
                                    to={el.link}
                                    className="hover:text-light-blue hover:pl-2.5 hover:transition-all hover:ease-out hover:duration-300 transition-all ease-out duration-300 pb-1.5 text-project-light-gray"
                                >
                                    <span>{el.title}</span>
                                </HashLink>
                                })}
                            </div>
                            <div className="flex flex-col font-mukta text-base ">
                                <span className=" pb-3 mb-0.5 font-semibold text-black">
                                    Our Social Media
                                </span>
                                <div className="flex items-center">
                                    <a href="">
                                        <img
                                            src={facebookLogoLarge}
                                            className="pr-4"
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src={linkedInLogoLarge}
                                            className="pr-4 "
                                        />
                                    </a>
                                    <a href="">
                                        <img src={twitterLogoLarge} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex font-mukla text-sm text-project-black w-full">
                            <p>© Copyright 2022</p>
                            <p className="ml-auto">All rights reserved</p>
                        </div>
                    </div>
                </div>
            </>
        );
};

export default Footer;
