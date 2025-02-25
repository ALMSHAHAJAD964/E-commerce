
import { Rating } from "@mui/material";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductItem from "../../../Components/ProductItem";
const RelatedProducts = (props) => {
    return (
        <>
            <div className="d-flex align-items-center mt-3 ">
                <div className="Info w-75">
                    <h2 className="md-0 hd">{props.title }</h2>
                </div>


            </div>


            <div className="Product_row  w-100 mt-0">

                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item ProductItem">
                            <div className="imgWrapper">
                                <img
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"
                                    alt="Product 1" />
                                <span className="badge badge-primary">28%</span>
                                <div className="actions">
                                    <Button><TfiFullscreen /></Button>
                                    <Button><IoMdHeartEmpty /></Button>
                                </div>
                            </div>
                            <div className="info">
                                <h4>Werther’s Original Caramel Hard Candies</h4>
                                <span className="text-success d-block">In Stock</span>
                                <Rating className="mt-2 md-2" name="read-only" value={5} readOnly
                                    size="small" precision={0.5} />
                                <div className="d -flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="NetPrice text-danger ml-2">$24.00</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item ProductItem">
                            <div className="imgWrapper">
                                <img
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"
                                    alt="Product 1" />
                                <span className="badge badge-primary">28%</span>
                                <div className="actions">
                                    <Button><TfiFullscreen /></Button>
                                    <Button><IoMdHeartEmpty /></Button>
                                </div>
                            </div>
                            <div className="info">
                                <h4>Werther’s Original Caramel Hard Candies</h4>
                                <span className="text-success d-block">In Stock</span>
                                <Rating className="mt-2 md-2" name="read-only" value={5} readOnly
                                    size="small" precision={0.5} />
                                <div className="d -flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="NetPrice text-danger ml-2">$24.00</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="item ProductItem">
                            <div className="imgWrapper">
                                <img
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg"
                                    className="w-100"
                                    alt="Product 1" />
                                <span className="badge badge-primary">28%</span>
                                <div className="actions">
                                    <Button><TfiFullscreen /></Button>
                                    <Button><IoMdHeartEmpty /></Button>
                                </div>
                            </div>
                            <div className="info">
                                <h4>Werther’s Original Caramel Hard Candies</h4>
                                <span className="text-success d-block">In Stock</span>
                                <Rating className="mt-2 md-2" name="read-only" value={5} readOnly
                                    size="small" precision={0.5} />
                                <div className="d -flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="NetPrice text-danger ml-2">$24.00</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item ProductItem">
                            <div className="imgWrapper">
                                <img
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg"
                                    className="w-100"
                                    alt="Product 1" />
                                <span className="badge badge-primary">28%</span>
                                <div className="actions">
                                    <Button><TfiFullscreen /></Button>
                                    <Button><IoMdHeartEmpty /></Button>
                                </div>
                            </div>
                            <div className="info">
                                <h4>Werther’s Original Caramel Hard Candies</h4>
                                <span className="text-success d-block">In Stock</span>
                                <Rating className="mt-2 md-2" name="read-only" value={5} readOnly
                                    size="small" precision={0.5} />
                                <div className="d -flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="NetPrice text-danger ml-2">$24.00</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </div>
        </>
    )
}
export default RelatedProducts;