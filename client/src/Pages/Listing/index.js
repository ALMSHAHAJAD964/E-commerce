import Slidebar from "../../Components/SideBar";
import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ProductItem from "../../Components/ProductItem";
import Pagination from '@mui/material/Pagination';
import React from 'react';


const Listing = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState("four");
    const openDropdown = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Determine the number of items to display based on productView
    const getNumberOfItems = () => {
        switch (productView) {
            case "one":
                return 1;
            case "two":
                return 2;
            case "three":
                return 3;
            case "four":
                return 4;
            default:
                return 4; // Default to 4 items if no match
        }
    };

    const numberOfItems = getNumberOfItems();

    return (
        <>
            <section className="product_Listing_Page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Slidebar />

                        <div className="content_right">
                            <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                                className="w-100"
                                style={{ borderRadius: "8px" }}
                            />
                            <br />
                            <br />
                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex btnWrapper align-items-center">
                                    <Button className={productView === 'one' && 'act'} onClick={() => setProductView("one")}>
                                        <IoIosMenu />
                                    </Button>
                                    <Button className={productView === 'two' && 'act'} onClick={() => setProductView("two")}>
                                        <HiViewGrid />
                                    </Button>
                                    <Button className={productView === 'three' && 'act'} onClick={() => setProductView("three")}>
                                        <CgMenuGridR />
                                    </Button>
                                    <Button className={productView === 'four' && 'act'} onClick={() => setProductView("four")}>
                                        <TfiLayoutGrid4Alt />
                                    </Button>
                                </div>
                                <div className="ml-auto showByFilter">
                                    <Button onClick={handleClick}>
                                        Show 9<FaAngleDown />
                                    </Button>
                                    <Menu
                                        className="w-100 showPerPageDropdown"
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropdown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            "aria-labelledby": "basic-button",
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>10</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                        <MenuItem onClick={handleClose}>40</MenuItem>
                                        <MenuItem onClick={handleClose}>50</MenuItem>
                                        <MenuItem onClick={handleClose}>60</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <>
    {/* First List Section */}
    <div className="Product_row productRow2 w-100 mt-4 d-flex">
        {Array.from({ length: numberOfItems }).map((_, index) => (
            <ProductItem key={`section-1-${index}`} itemView={productView} />
        ))}
    </div>

    {/* Second List Section */}
    <div className="Product_row productRow2 w-100 mt-4 d-flex">
        {Array.from({ length: numberOfItems }).map((_, index) => (
            <ProductItem key={`section-2-${index}`} itemView={productView} />
        ))}
    </div>

    {/* Third List Section */}
    <div className="Product_row productRow2 w-100 mt-4 d-flex">
        {Array.from({ length: numberOfItems }).map((_, index) => (
            <ProductItem key={`section-3-${index}`} itemView={productView} />
        ))}
    </div>
</>




                            <div className="d-flex align-items-center justify-content-center mt-5">
                                <Pagination count={10} color="primary" size="large" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Listing;
