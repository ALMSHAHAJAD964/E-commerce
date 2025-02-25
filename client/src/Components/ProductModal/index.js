import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import { MdOutlineCompareArrows } from "react-icons/md";
import QuantityBox from '../QuantityBox';
import { useContext, useRef, useState } from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { IoIosHeartEmpty } from "react-icons/io";
import { MyContext } from '../../App';
import ProductZoom from '../ProductZoom';
import { IoCartSharp } from "react-icons/io5";

const ProductModal = ({ open, closeProductModal }) => {
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

  const goto = (index) => {
    setSliderIndex(index);
    if (zoomSliderBig.current) {
      zoomSliderBig.current.slickGoTo(index);
    }
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

  return (
    <Dialog open={open} className="productModal" onClose={() => context.setIsOpenProductModal(false)}>
      <div style={{ padding: '20px', position: 'relative' }}>
        <Button className="close_" onClick={() => context.setIsOpenProductModal(false)}><MdClose /></Button>
        <h4 className="mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
        <div className='d-flex align-items-center'>
          <div className='d-flex align-items-center mr-4'>
            <span>Brand:</span>
            <span className='ml-2'><b>Welch's</b></span>
          </div>
          <Rating name="read-only" value={5} size='small' precision={0.5} readOnly />
        </div>

        <hr />
        <div className='row mt-2 productDetaileModal'>
          <div className='col-md-5'>
           <ProductZoom/>
          </div>
          <div className='col-md-7'>
            <div className='d-flex info align-items-center md-4'>
              <span className='oldPrice lg mr-2'>$9.35</span>
              <span className='NetPrice text-danger lg'>$7.25</span>
            </div>
            <span className='badge bg-success'>IN STOCK</span>
            <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper.
              Nulla luctus malesuada tincidunt.Class aptent
              taciti sociosqu ad litora torquent</p>
            <div className='d-flex align-items-center'>
              <QuantityBox />
              <Button className='btn-blue bg-red btn-lg btn-big btn-round ml-3'><IoCartSharp />Add to cart</Button>
            </div>

            <div className='d-flex align-items-center mt-5 actions'>
              <Button className='btn-round btn-sml'
                variant='outlined'><IoIosHeartEmpty /> &nbsp;Add to Wishlist</Button>
              <Button className='btn-round btn-sml ml-3'
                variant='outlined'><MdOutlineCompareArrows /> &nbsp;Compare</Button>
            </div>
          </div>
        </div>
      </div>


    </Dialog>
  );
};

export default ProductModal;
