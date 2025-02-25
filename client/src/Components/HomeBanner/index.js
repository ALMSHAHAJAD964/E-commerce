import { Navigation } from "@mui/icons-material";
import React from "react";
import Slider from "react-slick";

const HomeBanner =()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true // Use 'autoplay' (lowercase)
       // autoplaySpeed: 3000, // Interval between slides (in milliseconds)
    };
return(


<div className="container mt-3">
<div className="homeBannerSection">
 <Slider {...settings}>
    <div className="item">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h0a/haa/33279581913118/casio-fossil-web600_8--ek.jpg" className="w-100"/>
    </div>
    <div className="item">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/hd0/h37/33279592103966/BIBA-%26-W-web600_39--alo.jpg" className="w-100"/>
    </div>
    <div className="item">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h47/h85/33279588368414/AE-%26-TH-web600_ue--j93.jpg" className="w-100"/>
    </div>
    <div className="item">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h31/hbd/33214877761566/Adidas-web_g7-h8t_57--gui.jpg" className="w-100"/>
    </div>
    <div className="item">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h27/h40/33278720606238/Static-Web-Just-cavalli_060824.jpg" className="w-100"/>
    </div>
    <div className="item">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h59/h19/33258394451998/BB_Top%20Carousel_Web%20500_bb-082.jpg" className="w-100"/>
    </div>
 </Slider>
    </div>
</div>
)
}
export default HomeBanner;