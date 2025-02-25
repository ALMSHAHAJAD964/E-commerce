import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
//import { CiHome } from "react-icons/ci";

const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
    return (
        <nav>
            <div className="cantainer">
                <div className='row headerseaction'>
                    <div className="col-sm-3 navPart1 ">
                        <div className='catWrapper'>
                            <Button
                                className='allCatTab align-itmes-center' onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                                <IoIosMenu className="mr-2" />
                                ALL CATEGORIES
                                <FaAngleDown className="ml-2" />
                            </Button>
                            <div className={`sidebarNav shadow ${isopenSidebarVal === true ? 'open' : ''}`}>
                                <ul>
                                    <li className="list-inline-item dropdown-wrapper">
                                        <Link to="/"><Button>men<FaAngleRight className='ml-auto' /></Button></Link>
                                        <div className="submenu shadow">
                                            <Link to="/"><Button>Clothing</Button></Link>
                                            <Link to="/"><Button>Footwear</Button></Link>
                                            <Link to="/"><Button>Watches</Button></Link>
                                            <Link to="/"><Button>Smallboy </Button></Link>
                                            <Link to="/"><Button>Bigboy</Button></Link>
                                            <Link to="/"><Button>lagi</Button></Link>
                                        </div>
                                    </li>
                                    <li className="list-inline-item dropdown-wrapper" >
                                        <Link to="/"><Button>women<FaAngleRight className='ml-auto' /></Button></Link>
                                        <div className="submenu shadow">
                                            <Link to="/"><Button>Paress</Button></Link>
                                            <Link to="/"><Button>hels</Button></Link>
                                            <Link to="/"><Button>shaper</Button></Link>
                                            <Link to="/"><Button>Watch </Button></Link>
                                            <Link to="/"><Button>colthes</Button></Link>
                                            <Link to="/"><Button>lagi</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li>
                                    <li><Link to="/"><Button>men</Button></Link></li>
                                    <li><Link to="/"><Button>women</Button></Link></li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline d-flex justify-content-between">
                            <li className="list-inline-item">
                                <Link to="/"><Button>Home</Button></Link>
                            </li>
                            <li className="list-inline-item dropdown-wrapper">
                                <Link to="/"><Button>MEN</Button></Link>
                                <div className="submenu shadow">
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>Smallboy </Button></Link>
                                    <Link to="/"><Button>Bigboy</Button></Link>
                                    <Link to="/"><Button>lagi</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item dropdown-wrapper">
                                <Link to="/"><Button>WOMEN</Button></Link>
                                <div className="submenu shadow">
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>Smallboy </Button></Link>
                                    <Link to="/"><Button>Bigboy</Button></Link>
                                    <Link to="/"><Button>lagi</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item dropdown-wrapper">
                                <Link to="/"><Button>Beauty</Button></Link>
                                <div className="submenu shadow">
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>Smallboy </Button></Link>
                                    <Link to="/"><Button>Bigboy</Button></Link>
                                    <Link to="/"><Button>lagi</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to="/"><Button>Watches</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button>Kids</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button>Gift</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button>Blog</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button>Contact</Button></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation;