import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../../App";

// Reusable ProductCard Component
const ProductCard = ({ product, itemView }) => {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true); // Open the modal
  };

  return (
    <div className={`item ProductItem ${itemView}`}>
      <div className="imgWrapper">
        <img src={product.image} className="w-100" alt={product.name} />
        <span className="badge badge-primary">{product.discount}%</span>
        <div className="actions">
          <Button onClick={() => viewProductDetails(product.id)}>
            <TfiFullscreen />
          </Button>
          <Button>
            <IoMdHeartEmpty style={{ fontSize: "20px" }} />
          </Button>
        </div>
      </div>
      <div className="info">
        <h4>{product.name}</h4>
        <span
          className={`d-block ${
            product.inStock ? "text-success" : "text-danger"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
        <Rating
          className="mt-2 md-2"
          name="read-only"
          value={product.rating}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="d-flex">
          <span className="oldPrice">${product.oldPrice}</span>
          <span className="NetPrice text-danger ml-2">${product.newPrice}</span>
        </div>
      </div>
    </div>
  );
};

// Main ProductItem Component
const ProductItem = ({ itemView }) => {
  const products = [
    {
      id: 1,
      image:
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg",
      name: "Werther’s Original Caramel Hard Candies",
      discount: 30,
      inStock: true,
      rating: 3,
      oldPrice: 20.0,
      newPrice: 24.0,
    },
    // Add more product objects as needed
  ];

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} itemView={itemView} />
      ))}
    </>
  );
};

export default ProductItem;
