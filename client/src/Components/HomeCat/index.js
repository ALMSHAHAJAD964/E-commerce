import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
const HomeCat = () => {

    return (
        <section className="homeCat">
            <div className="container">
                <h3 class="mb-3 hd">Featured Categories </h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={5}
                    slidesPerGroup={1}
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
                        <div className="item text-center cursor">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center">
                            <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" />
                            <h6>Gorcery</h6>
                        </div>
                    </SwiperSlide>
                   

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </div>
        </section>
    )
}
export default HomeCat;