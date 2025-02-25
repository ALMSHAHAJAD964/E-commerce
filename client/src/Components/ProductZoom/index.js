import React, { useState, useRef, useContext } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { MyContext } from "../../App";

const ProductZoom = ({ open, closeProductModal }) => {
  const [slideIndex, setSliderIndex] = useState(0);
  const zoomSliderBig = useRef();
  const context = useContext(MyContext);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const settings1 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const goto = (index) => {
    setSliderIndex(index);
    if (zoomSliderBig.current) {
      zoomSliderBig.current.slickGoTo(index);
    }
  };

  return (
    <div className="productZoom">
      <div className="productZoom position-relative">
        <div className="badge badge-primary">23%</div>

        <Slider {...settings1} className="zoomSliderBig" ref={zoomSliderBig}>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg"
              className="w-100"
              onClick={() => goto(0)}
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-45-600x540.jpg"
              className="w-100"
              onClick={() => goto(1)}
              alt="Product Back"
            />
          </div>
          <div className="item">
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-33-600x540.jpg"
              className="w-100"
              onClick={() => goto(2)}
              alt="Product Left"
            />
          </div>
        </Slider>
      </div>

      <Slider {...settings} className="zoomSlider">
        <div className={`item ${slideIndex === 0 && "item_active"}`}>
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-45.jpg"
            className="w-100"
            onClick={() => goto(0)}
            alt="Product Front"
          />
        </div>
        <div className={`item ${slideIndex === 1 && "item_active"}`}>
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-45-600x540.jpg"
            className="w-100"
            onClick={() => goto(1)}
            alt="Product Back"
          />
        </div>
        <div className={`item ${slideIndex === 2 && "item_active"}`}>
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-33-600x540.jpg"
            className="w-100"
            onClick={() => goto(2)}
            alt="Product Left"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProductZoom;
