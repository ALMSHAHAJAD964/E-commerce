import Logo from '../../assets/image/logo.webp';
import Logo1 from '../../assets/image/log.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import countryDropDown from '../CountryDropDown';
import CountryDropDown from '../CountryDropDown';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from '../Header/SearchBox';
import Navigation from '../Header/Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header = () => {
    const context = useContext(MyContext)
    const navigate = useNavigate()
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="cantainer">
                        <p className="mb-0 mt-0 text-center"> An online store that allows <b>customers</b> to buy and sell products and services.</p>
                    </div>
                </div>
                <header className="header">
                    <div className="cantiainer">
                        <div className="row">
                            <div className="logoWrapper d-flax align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                            </div>

                            <div className='col-sm-10 d-flax align-items-center part2 '>
                                {
                                    context.countryList.length != 0 && <CountryDropDown />
                                }

                                <SearchBox />


                                <div className='part3 d-flex align-items-center'>
                                    {
                                        context.isLogin !== true ? <Link to="/signIn">
                                            <Button className='btn-blue btn-big btn-round mr-3'>Sign In</Button>
                                        </Link> : <Button className='circle mr-3'><FiUser /></Button>
                                    }


                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle ' onClick={() => { navigate("/cart") }}><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>3</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
                <Navigation />

            </div>
        </>
    )
}
export default Header;