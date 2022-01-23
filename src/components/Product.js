import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";
import { useContext } from "react";
import { Store } from "../Store";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../action/cartActions";
export default function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    //   const { data } = await axios.get(`/api/products/${product._id}`);
    //   console.log(data);
    //   if (data.countStock < quantity) {
    //     window.alert("Sorry. Product is out of stock");
    //     return;
    //   }
    //   ctxDispatch({
    //     type: "CART_ADD_ITEM",
    //     payload: { ...product, quantity: quantity },
    //   });
    //   toogleShow();
    // };
    // const toogleShow = async () => {
    //   ctxDispatch({
    //     type: "TOOGLE_SHOW",
    //     payload: { show: true },
    //   });
    dispatch(addToCart(cart, product, quantity));
  };
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className='card-img-top' alt={product.name} />
      </Link>
      <Card.Body>
        <div className='product-info'>
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <Card.Text>RM {product.price}</Card.Text>
          {product.countStock === 0 ? (
            <Button variant='light' disabled>
              Out Of Stock
            </Button>
          ) : (
            <Button onClick={addToCartHandler}>Add to cart</Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
