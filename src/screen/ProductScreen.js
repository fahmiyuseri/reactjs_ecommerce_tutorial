import React, { useReducer, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import logger from "use-reducer-logger";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Rating from "../components/Rating";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { getError } from "../components/utils";
import { Store } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../action/productAction";
import { addToCart } from "../action/cartActions";

export default function ProductScreen() {
  //Get data from redux
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, products } = productDetail;
  const cart = useSelector((state) => state.cart);

  const params = useParams();
  const { slug } = params;
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(singleProduct(slug));
  }, [dispatch]);
  console.log(productDetail);

  const addToCartHandler = async () => {

    dispatch(addToCart(cart, products, 1));
    console.log(cart);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div>
          <Row>
            <Col md={6}>
              <img
                className='img-large'
                src={products.image}
                alt={products.name}
              ></img>
            </Col>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <Helmet>
                    <title>{products.name}</title>
                  </Helmet>

                  <h1>{products.name}</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={products.rating}
                    numReviews={products.numReviews}
                  ></Rating>{" "}
                </ListGroup.Item>
                <ListGroup.Item>Price : RM {products.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description:<p>{products.description}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Row>
                        <Col>Price</Col>
                        <Col>RM {products.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status</Col>
                        <Col>
                          {products.countStock > 0 ? (
                            <Badge bg='success'>In Stock</Badge>
                          ) : (
                            <Badge bg='danger'>Out of stock</Badge>
                          )}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {products.countStock > 0 && (
                      <div className='d-grid'>
                        <Button
                          variant='primary'
                          style={{ marginTop: 10 }}
                          onClick={addToCartHandler}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    )}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}{" "}
    </div>
  );
}
