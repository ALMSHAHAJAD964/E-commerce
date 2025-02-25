import { useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import { Rating } from "@mui/material";
import QuantityBox from "../../Components/QuantityBox";
import Button from '@mui/material/Button';
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";


const ProductDetails = () => {
    const [activeSize, setactiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);
    const [reviewData, setReviewData] = useState({
        name: '',
        email: '',
        rating: 0,
        reviewText: '',
    });

    const isActive = (index) => {
        setactiveSize(index);
    };

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setReviewData({
            ...reviewData,
            [name]: value,
        });
    };

    const handleReviewSubmit = () => {
        // Logic to submit the review (e.g., API call to save the review)
        alert("Review Submitted!");
    };

    const descriptionContent = (
        <div className="info">
            <h4>Product Description</h4>
            <p >
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies
                sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est
                in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
                Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor,
                eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra.
                Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.
                Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus
                ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit.
                Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus,
                ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat
                nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.
            </p>
        </div>
    );

    const additionalInfoContent = (
        <div className="container">
            <h4 className="mb-4">Additional Information</h4>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Weight</th>
                                <td>500g</td>
                            </tr>
                            <tr>
                                <th>Ingredients</th>
                                <td>Chicken, spices, salt</td>
                            </tr>
                            <tr>
                                <th>Storage</th>
                                <td>Keep refrigerated</td>
                            </tr>
                            <tr>
                                <th>Shelf Life</th>
                                <td>7 days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const reviewContent = (
        <div>
            <h4>Customer Reviews (3)</h4>
            <div>
                <p><strong>John Doe:</strong> Excellent product! Highly recommend.</p>
                <p><strong>Jane Smith:</strong> Very flavorful and easy to prepare.</p>
                <p><strong>Mark Lee:</strong> Good quality, will buy again.</p>
            </div>
            <div className="adminImage">
                <img src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&d=mm&r=g" alt="Admin" className="admin-image"
                    class="avatar avatar-60 photo" height="60" width="60" decoding="async" />

                <h4>Add a Review</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={reviewData.email}
                            onChange={handleReviewChange}
                            placeholder="Your email"
                            required
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="name"
                            className="form-control"
                            id="name"
                            name="name"
                            value={reviewData.name}
                            onChange={handleReviewChange}
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Your Rating</label>
                        <Rating
                            name="rating"
                            value={reviewData.rating}
                            onChange={(e, newValue) => setReviewData({ ...reviewData, rating: newValue })}
                            size="small"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reviewText">Your Review</label>
                        <textarea
                            className="form-control"
                            id="reviewText"
                            name="reviewText"
                            value={reviewData.reviewText}
                            onChange={handleReviewChange}
                            rows="4"
                            placeholder="Write your review here..."
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="btn-blue btn-lg btn-big btn-round"
                        onClick={handleReviewSubmit}
                    >
                        Submit Review
                    </Button>

                </form>

            </div>
        </div>
    );

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
                        </div>

                        <div className="col-md-7 pl-5 pr-5">
                            <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list inline-itme">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light mr-2">Brands: </span>
                                        <span>Welch's </span>
                                    </div>
                                </li>
                                <li className="list inline-itme">
                                    <div className="d-flex align-items-center ml-1">
                                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                        <span className="text-light cursor ml-2">1 Review</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex info mb-3">
                                <span className="oldPrice">$20.00</span>
                                <span className="NetPrice text-danger ml-2">$24.00</span>
                            </div>
                            <span className="badge badge-success">IN STOCK</span>
                            <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper...</p>

                            <div className='productSize d-flex align-items-center'>
                                <span>Size / Weight:</span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list inline-itme"><a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>100g</a></li>
                                    <li className='list inline-itme'><a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>200g</a></li>
                                    <li className="list inline-itme"><a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>300g</a></li>
                                    <li className="list inline-itme"><a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>400g</a></li>
                                    <li className="list inline-itme"><a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>500g</a></li>
                                </ul>
                            </div>
                            <div className='d-flex align-items-center mt-3'>
                                <QuantityBox />
                                <Button className='btn-blue btn-lg btn-big btn-round ml-3'>
                                    <BsCartFill /> &nbsp;Add to cart
                                </Button>

                                <Button className='btn-blue btn-lg btn-big btn-circle ml-4'>
                                    <BsCartFill />
                                </Button>
                                <Tooltip title='Add to Wishlist' placement="top">
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-4'>
                                        <FaRegHeart />
                                    </Button>
                                </Tooltip>
                                <Tooltip title='Add to Compare' placement="top">
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-2'>
                                        <MdOutlineCompareArrows />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <br />


                    <div className="card mt-5 p-5 detailsPagesTabs">
                        <div className="customTabs">
                            <div className="list list-inline">
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => setActiveTabs(0)}>
                                        Description
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => setActiveTabs(1)}>
                                        Additional info
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => setActiveTabs(2)}>
                                        Review(3)
                                    </Button>
                                </li>
                            </div>
                        </div>
                        <div className="tabContent mt-4">
                            {activeTabs === 0 && descriptionContent}
                            {activeTabs === 1 && additionalInfoContent}
                            {activeTabs === 2 && reviewContent}
                        </div>
                    </div>

                    <br />
                    <RelatedProducts title="Related products" />


                    <RelatedProducts title="Recently Viewed Products" />

                </div>
            </section>
        </>
    );
};

export default ProductDetails;
