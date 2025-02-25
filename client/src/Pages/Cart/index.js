import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCartSharp } from "react-icons/io5";

const Cart = () => {
    return (
        <>
            <section>
                <div className="section cartPage">
                    <div className="container">
                        <h2 className="hd mb-1">Your Cart</h2>
                        <p>There are <b className="text-red">3</b> products in your cart</p>
                        <div className="row">
                            <div className="col-md-9 pr-5">




                                <div className="table-responsive mt-0">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th width="35%">Product</th>
                                                <th width="15%">Unit Price</th>
                                                <th width="25%">Quantity</th>
                                                <th width="15%">Subtotal</th>
                                                <th width="10%">Remove</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td width="35%">
                                                    <Link to="/product/1">
                                                        <div className="d-flex align-items-center cartItemimgWrapper">
                                                            <div className="imgWrapper">
                                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-600x540.jpg" className="w-100" />
                                                            </div>
                                                            <div className="info px-3">
                                                                <h6>
                                                                    Blue Diamond Almonds Lightly Salted
                                                                </h6>
                                                                <Rating name="ready-only" value={4.5} size="small" precision={0.5} readOnly />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td width="15%" >$3.29</td>
                                                <td width="25%"><QuantityBox /></td>
                                                <td width="15%">$3.29</td>
                                                <td width="10%"><span className="remove"><IoIosClose /></span></td>
                                            </tr>
                                            <tr>
                                                <td width="35%">
                                                    <Link to="/product/1">
                                                        <div className="d-flex align-items-center cartItemimgWrapper">
                                                            <div className="imgWrapper">
                                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-600x540.jpg" className="w-100" />
                                                            </div>
                                                            <div className="info px-3">
                                                                <h6>
                                                                    Blue Diamond Almonds Lightly Salted
                                                                </h6>
                                                                <Rating name="ready-only" value={4.5} size="small" precision={0.5} readOnly />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td width="15%" >$3.29</td>
                                                <td width="25%"><QuantityBox /></td>
                                                <td width="15%">$3.29</td>
                                                <td width="10%"><span className="remove"><IoIosClose /></span></td>
                                            </tr>
                                            <tr>
                                                <td width="35%">
                                                    <Link to="/product/1">
                                                        <div className="d-flex align-items-center cartItemimgWrapper">
                                                            <div className="imgWrapper">
                                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-600x540.jpg" className="w-100" />
                                                            </div>
                                                            <div className="info px-3">
                                                                <h6>
                                                                    Blue Diamond Almonds Lightly Salted
                                                                </h6>
                                                                <Rating name="ready-only" value={4.5} size="small" precision={0.5} readOnly />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td width="15%" >$3.29</td>
                                                <td width="25%"><QuantityBox /></td>
                                                <td width="15%">$3.29</td>
                                                <td width="10%"><span className="remove"><IoIosClose /></span></td>
                                            </tr>
                                            <tr>
                                                <td width="35%">
                                                    <Link to="/product/1">
                                                        <div className="d-flex align-items-center cartItemimgWrapper">
                                                            <div className="imgWrapper">
                                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-600x540.jpg" className="w-100" />
                                                            </div>
                                                            <div className="info px-3">
                                                                <h6>
                                                                    Blue Diamond Almonds Lightly Salted
                                                                </h6>
                                                                <Rating name="ready-only" value={4.5} size="small" precision={0.5} readOnly />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td width="15%" >$3.29</td>
                                                <td width="25%"><QuantityBox /></td>
                                                <td width="15%">$3.29</td>
                                                <td width="10%"><span className="remove"><IoIosClose /></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border p-3 cartDetails">
                                    <h4>CART TOTALS</h4>


                                    <div className="d-flex align-items-center mb-3">
                                        <span>Subtotal</span>
                                        <span className="ml-auto text-red font-weight-bold">$12.31</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <span>Shipping</span>
                                        <span className="ml-auto"><b>Free</b></span>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <span>Estimate for</span>
                                        <span className="ml-auto"><b>India</b></span>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <span>Totals</span>
                                        <span className="ml-auto text-red font-weight-bold">$12.31</span>
                                    </div>
<br/>
                                    <Button className='btn-blue bg-red btn-lg btn-big'><IoCartSharp />Add to cart</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cart;