import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../action/userActions";
import CheckoutSteps from "../components/CheckoutStep";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function ShippingScreen(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const userSignin = useSelector((state) => state.userSignin);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    //   dispatch(register(name, email, password));
  };

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (userSignin.userInfo) {
      // navigate(redirect);
    }
  }, [redirectInUrl, redirect, userSignin]);
  return (
    <div style={{ flex: 1 }}>
      <CheckoutSteps step1 step2 />
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder='Full name'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder='Address'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(e) => {
              setCity(e.target.value);
            }}
            placeholder='City'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
            placeholder='PostalCode'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            placeholder='Country'
          />
        </Form.Group>
        <div className='d-grid gap-2'>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
