// @ts-nocheck
import {
    AppBar,
    Box,
    Container,
    button,
    Icon,
    Link,
    Typography,
} from "@mui/material";
import Button from '../shared/Button'

import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";

import {
    NavLink as RouterNavLink,
    useLocation,
    useNavigate,
} from "react-router-dom";
import SmallLogo from "../../assets/images/logo-small.svg";
import LargeLogo from "../../assets/images/logo-large.svg";
import MenuIcon from "components/Icons/MenuIcon";
import CloseIcon from "components/Icons/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import UserIcon from "components/Icons/UserIcon";
import { HashLink } from "react-router-hash-link";
import { removeToken, removeId } from "store/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const token = useSelector((state) => state?.token);
    const { pathname, hash } = useLocation();
    const userId = useSelector((state) => state.id);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const handleClickAccountIcon = () => {
        navigate("/login");
    };

    return (
        <div
            className={`${openMenu ? `bg-project-gray` : `bg-white`} ${
                scroll ? `shadow-[0_4px_4px_rgb(0,0,0,0.2)]` : ``
            } transition-all sticky top-0  z-50`}
        >
            <div className="lg:container px-4 md:px-10 lg:px-20 xl:px-110px py-31px xl:py-9 md:py-30px lg:py-35px">
                <div className="flex justify-between w-full items-center">
                    <RouterNavLink to="/">
                        <img
                            src={LargeLogo}
                            className="hidden lg:block"
                            alt="large logo"
                        />
                        <img
                            src={SmallLogo}
                            className="lg:hidden"
                            alt="small logo"
                        />
                    </RouterNavLink>
                    <div
                        className={`hidden lg:flex justify-between font-mukta text-lg xl:text-xl`}
                    >
                        <HashLink
                            to="/"
                            className={`mr-5 hover:opacity-100 transition-all ease-out duration-200 ${
                                pathname === "/" && !hash
                                    ? `opacity-100`
                                    : `opacity-54`
                            }  `}
                        >
                            <span>Home</span>
                        </HashLink>
                        <HashLink
                            to="/#offers"
                            className={`mr-5 hover:opacity-100 transition-all ease-out duration-200 ${
                                hash === "#offers"
                                    ? `opacity-100`
                                    : `opacity-54`
                            }`}
                        >
                            <span>Offers</span>
                        </HashLink>
                        <HashLink
                            to="/#vision"
                            className={`mr-5 hover:opacity-100 transition-all ease-out duration-200 ${
                                hash === "#vision"
                                    ? `opacity-100`
                                    : `opacity-54`
                            }`}
                        >
                            <span>Vision</span>
                        </HashLink>
                        <HashLink
                            to="/#careers"
                            className={`mr-5 hover:opacity-100 transition-all ease-out duration-200 ${
                                hash === "#careers"
                                    ? `opacity-100`
                                    : `opacity-54`
                            }`}
                        >
                            <span>Careers</span>
                        </HashLink>
                        <HashLink
                            to="/#trading"
                            className={`mr-5 hover:opacity-100 transition-all ease-out duration-200 ${
                                hash === "#trading"
                                    ? `opacity-100`
                                    : `opacity-54`
                            }`}
                        >
                            <span>Trading University</span>
                        </HashLink>

                        <HashLink
                            to="contact-us"
                            className={`mr-5 hover:opacity-100 transition-all ease-out duration-200 ${
                                pathname === "/contact-us"
                                    ? "opacity-100"
                                    : "opacity-54"
                            }`}
                        >
                            <span>Contact Us</span>
                        </HashLink>
                    </div>
                    <div className="flex items-center gap-x-4">
                        {token && userId ? (
                            <>
                                <Button
                                    onClick={() => {
                                        dispatch(removeId());
                                        dispatch(removeToken());
                                        localStorage.removeItem("token");
                                        navigate("/");
                                    }}
                                    className="py-7px  px-34.5px"
                                >
                                    Log Out
                                </Button>

                                <button
                                    onClick={() => {
                                        navigate("/account-info");
                                    }}
                                >
                                    <UserIcon />
                                </button>
                                <button
                                    onClick={() => setOpenMenu(!openMenu)}
                                    className="lg:hidden"
                                >
                                    {openMenu ? <CloseIcon /> : <MenuIcon />}
                                </button>
                            </>
                        ) : (
                            <>
                                <Button className="py-7px  px-34.5px mr-3 md:mr-4" onClick={() => navigate("/login")}>
                                    Log in
                                </Button>

                                <HashLink to="/#plans">
                                    <Button className="py-7px px-34.5px ">
                                        Join now
                                    </Button>
                                </HashLink>

                                <button
                                    onClick={() => setOpenMenu(!openMenu)}
                                    className="lg:hidden"
                                >
                                    {openMenu ? <CloseIcon /> : <MenuIcon />}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div
                className={`${
                    openMenu ? `flex` : `hidden`
                }  lg:container px-4 md:px-10 lg:px-20 xl:px-110px pb-31px xl:pb-9 md:pb-30px lg:pb-35px ${
                    openMenu ? `opacity-100` : `opacity-0`
                } ${
                    openMenu ? `h-full` : `h-0`
                } flex-col font-mukta text-lg xl:text-xl`}
            >
                <HashLink to="/" className={`pb-6 `}>
                    <span>Home</span>
                </HashLink>
                <HashLink to="/#offers" className={`pb-6 `}>
                    <span>Offers</span>
                </HashLink>
                <HashLink to="/#vision" className={`pb-6 `}>
                    <span>Vision</span>
                </HashLink>
                <HashLink to="/#careers" className={`pb-6`}>
                    <span>Careers</span>
                </HashLink>
                <HashLink to="/#trading" className={`pb-6`}>
                    <span>Trading University</span>
                </HashLink>
                <HashLink to="/#team" className={`pb-6`}>
                    <span>Team</span>
                </HashLink>
                <HashLink to="contact-us" className={`pb-6 md:pb-0`}>
                    <span>Contact Us</span>
                </HashLink>
                <button
                    onClick={() => {
                        dispatch(removeId());
                        dispatch(removeToken());
                        localStorage.removeItem("token");
                        navigate("/");
                    }}
                    className="w-fit md:hidden"
                >
                    <span>Log out</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
