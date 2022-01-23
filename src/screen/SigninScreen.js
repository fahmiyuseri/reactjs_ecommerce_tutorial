import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signin } from "../action/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function SignInScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, products } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    console.log(email);
    dispatch(signin(email, password));
    e.preventDefault();
  };
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  useEffect(() => {
    if (userSignin.userInfo) {
      navigate(redirect);
    }
  }, [redirectInUrl, redirect, userSignin]);
  return (
    <Container>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h3 className='my-4'>Sign In</h3>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant='danger'>{error}</MessageBox>}
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <div className='mb-3'>
            <Button type='submit'>Sign In</Button>
          </div>
          <div className='mb-3'>
            New Customer?{" "}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>{" "}
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
}
