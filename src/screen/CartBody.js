import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Store } from "../Store";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Card from "react-bootstrap/Card";
import MessageBox from "../components/MessageBox";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useSelector } from "react-redux";

export default function CartBody() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  // const addToCartHandler = (item) => async () => {
  //   const existItem = cart.cartItems.find((x) => x._id === item._id);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   // const { data } = await axios.get(`/api/products/${product._id}`);
  //   // if (data.countInStock < quantity) {
  //   //   window.alert("Sorry. Product is out of stock");
  //   //   return;
  //   // }
  //   ctxDispatch({
  //     type: "CART_ADD_ITEM",
  //     payload: { ...item, quantity: quantity },
  //   });
  // };
  // const minusItemCartHandler = (item) => async () => {
  //   const existItem = cart.cartItems.find((x) => x._id === item._id);
  //   const quantity = existItem ? existItem.quantity - 1 : 1;
  //   // const { data } = await axios.get(`/api/products/${product._id}`);
  //   // if (data.countInStock < quantity) {
  //   //   window.alert("Sorry. Product is out of stock");
  //   //   return;
  //   // }
  //   ctxDispatch({
  //     type: "CART_ADD_ITEM",
  //     payload: { ...item, quantity: quantity },
  //   });
  // };

  const removeItem = (item) => async () => {
    // ctxDispatch({
    //   type: "CART_REMOVE_ITEM",
    //   payload: { ...item, quantity: 1 },
    // });
  };
  const checkoutHandler = async () => {
    navigate("/signin?redirect=/shipping");
  };
  return (
    <div>
      <Row>
        <Col>
          {cart.cartItems.length === 0 ? (
            <MessageBox>
              Card is empty.<Link to='/'>Go to Shopping Link</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cart.cartItems.map((item) => (
                <ListGroupItem key={item._id}>
                  <Stack direction='horizontal'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='img-fluid rounded img-thumbnail'
                    />{" "}
                    <Stack>
                      <Row className='align-items-center'>
                        <Col md={4}>
                          <Link to={`/product/${item.slug}`}>{item.name}</Link>
                        </Col>
                        <Col md={3}>RM {item.price}</Col>

                        <Col md={3}>
                          <Button
                            variant='light'
                            disabled={item.quantity === 1}
                            onClick={removeItem(item)}
                          >
                            {" "}
                            <i className='fas fa-minus-circle'></i>
                          </Button>{" "}
                          <span>{item.quantity}</span>{" "}
                          <Button
                            variant='light'
                            disabled={item.quantity === item.countInStock}
                            onClick={removeItem(item)}
                          >
                            <i className='fas fa-plus-circle'></i>
                          </Button>{" "}
                        </Col>
                        <Col md={2}>
                          {" "}
                          <Button variant='light' onClick={removeItem(item)}>
                            <i className='fas fa-trash'></i>
                          </Button>{" "}
                        </Col>
                      </Row>
                    </Stack>
                  </Stack>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
      <Col>
        <Card>
          <Card.Body>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h3>
                  Subtotal ({cart.cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                  items): RM
                  {cart.cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                </h3>
              </ListGroupItem>
              <ListGroupItem>
                <div className='d-grid'>
                  <Button
                    variant='primary'
                    style={{ marginTop: 10 }}
                    onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </Button>{" "}
                </div>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>{" "}
    </div>
  );
}
