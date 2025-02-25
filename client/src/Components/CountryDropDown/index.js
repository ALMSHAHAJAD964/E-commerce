import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import { selectClasses } from '@mui/material';
import { FilterList } from '@mui/icons-material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);
  const [countryList, setCounteryList] = useState([]);
  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectCountry(country)
  }

  useEffect(() => {
    setCounteryList(context.countryList);
  }, [])

  const FilterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword)
      });
      setCounteryList(list)
    } else {
      setCounteryList(context.countryList)
    }


  }

  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectCountry !== ""
              ? context.selectCountry.length > 10
                ? context.selectCountry.substring(0, 10) + '...'
                : context.selectCountry
              : 'Select Location'}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>



      <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)}
        className='locationModel' TransitionComponent={Transition}>
        <h4 className='mb-0'>Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your areea.</p>
        <Button className='close_' onClick={() => setisOpenModal(false)}><MdClose /></Button>
        <div className='headerSearch w-100'>
          <input type='text' placeholder='Search your area...' onChange={FilterList} />
          <Button><IoIosSearch /></Button>
        </div>


        <ul className='countryList mt-3'>
          {
            countryList?.length !== 0 && countryList?.map((item, index) => {
              return (
                <li key={index}><Button onClick={() => selectCountry(index, item.country)}
                  className={`${selectedTab === index ? 'active' : ''}`}
                >{item.country}</Button></li>
              )
            })
          }
          {/* <li><Button onClick={()=>setisOpenModal(false)}>Srilank</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>saudi</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>dubai</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>chaina</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>maharaster</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Srilank</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>saudi</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>dubai</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>chaina</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>maharaster</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Srilank</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>saudi</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>dubai</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>chaina</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>maharaster</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Srilank</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>saudi</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>dubai</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>chaina</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>maharaster</Button></li> */}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
