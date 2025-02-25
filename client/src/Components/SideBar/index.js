import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'; // Import slider styles
import { Link } from 'react-router-dom';

const Slidebar = () => {
  const [value, setValue] = useState([100, 60000]); // Price range state

  const handlePriceChange = (newValue) => {
    setValue(newValue);
    // onPriceFilterChange(newValue); // Pass new range to the parent
  };

  return (
    <div className="product_Listing_Page">
      <div className="productListing">
        <div className="sidebar">
          {/* Product Categories Filter */}
          <div className="filterBox">
            <h6>PRODUCT CATEGORIES</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Men" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Women" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Beauty" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Kids" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Watches" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Gift" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Blog" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Contact" />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox">
            <h6>FILTER BY PRICE</h6>
            <RangeSlider
              value={value}
              onInput={handlePriceChange} // Updates the range value
              min={100}
              max={60000}
              step={5}
              className="custom-slider"
            />

            <div className="d-flex pt-2 pb-2 priceRange">
              <span>
                From: <strong className="text-dark">Rs: {value[0]}</strong>
              </span>
              <span className="ml-auto">
                To: <strong className="text-dark">Rs: {value[1]}</strong>
              </span>
            </div>
          </div>



          <div className="filterBox">
            <h6>PRODUCT STATUS</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel control={<Checkbox />} label="In Stock" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="On Sale" />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox">
            <h6>BRANDS</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Frito Lay" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Nespresso" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Nespresso" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="watci's" />
                </li>
                <li>
                  <FormControlLabel control={<Checkbox />} label="Watches" />
                </li>
              </ul>
            </div>
           

          </div>
          <Link to="#"><img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif' className='w-100'
            style={{borderRadius:'8px'}}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
