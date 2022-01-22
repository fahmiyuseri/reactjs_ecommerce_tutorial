import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import data from "./data";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "./Store";
import { useContext } from "react";
import Badge from "react-bootstrap/esm/Badge";
import CartScreen from "./screen/CartScreen";
import SignInScreen from "./screen/SigninScreen";
import { Button } from "react-bootstrap";
import CartBody from "./screen/CartBody";
function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, show } = state;
  const toogleShow = async () => {
    ctxDispatch({
      type: "TOOGLE_SHOW",
      payload: { show: true },
    });
  };
  const toogleClose = async () => {
    ctxDispatch({
      type: "TOOGLE_SHOW",
      payload: { show: false },
    });
  };
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>amazonn</Navbar.Brand>
              </LinkContainer>
              <Nav className='me-auto'>
                <Button onClick={toogleShow} className='nav-link'>
                  Cart
                  <Badge pill bg='danger'>
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                  {}
                </Button>
              </Nav>
            </Container>
          </Navbar>
          console.log({show})
          <Offcanvas show={show} onHide={toogleClose} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <CartBody></CartBody>
            </Offcanvas.Body>
          </Offcanvas>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/signin' element={<SignInScreen />}></Route>
              <Route path='/product/:slug' element={<ProductScreen />}></Route>
              <Route path='/cart' element={<CartScreen />}></Route>
              <Route path='/' element={<HomeScreen />}></Route>
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'> All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
