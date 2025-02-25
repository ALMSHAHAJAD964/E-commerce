import HomeBanner from "../../Components/HomeBanner";
import banner1 from '../../assets/image/banner1.JPG';
import banner2 from '../../assets/image/banner2.jpg';
import banner3 from '../../assets/image/banner3.jpg';
import banner4 from '../../assets/image/banner4.jpg';
import newsLetterimg from '../../assets/image/coupon.webp';
import { IoMailOutline } from "react-icons/io5";
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
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";


const Home = () => {

    var ProductsSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <HomeBanner />
            <HomeCat />




            <section className="HomeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                           <div className="sticky">
                           <div className="banner">
                                <img src={banner1} className="cursor w-100" />
                            </div>
                            <div className="banner mt-4">
                                <img src={banner2} className="cursor w-100" />
                            </div>
                           </div>
                        </div>
                        <div className="col-md-9 ProductsRow">
                            <div className="d-flex align-items-center ">
                                <div className="Info w-75">
                                    <h3 className="md-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml md-0">Do not miss the current offers utils the end  of March.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            
                            <div className="Product_row  w-100 mt-4">

                                <Swiper
                                    slidesPerView={4}
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




                            <div className="d-flex align-items-center mt-5">
                                <div className="Info w-75">
                                    <h3 className="md-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml md-0">New product with updated stocks.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>
                            <div className="Product_row productRow2  w-100 mt-4 d-flex">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
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
                            </div>


                            <div className="d-flex">
                            <div className="banner mt-4 mb-5 bannerSec">
                                <img src={banner3} className="cursor w-100" />
                            </div>
                            <div className="banner mt-4 ml-3">
                                <img src={banner4} className="cursor w-100" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
            <div className="container">
   <div className="row">
    <div className="col-md-6 mb"> 
        <p className="text-white mb-0">$20 discount for your first order</p>
        <h3 className="text-white">Join our newsLetter and get....</h3>
        <p className="text-light">Join our email subscription 
            now to get updates on <br/> promotions and coupons.</p>
            <form>
            <IoMailOutline />
                <input type="text" placeholder="Your Email Address"/>
                <button>Subscription</button>
            </form>
    </div>
    <div className="col-md-6"> 
        <img src={newsLetterimg}/>  
    </div>  
   </div>
            </div>
          </section>

        <br/><br/><br/><br/><br/>

        </>
    )
}
export default Home;