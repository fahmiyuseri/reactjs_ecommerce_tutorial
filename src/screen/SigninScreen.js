import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

export default function SignInScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  return (
    <Container>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h3 className='my-4'>Sign In</h3>
      <Form>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' required />

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
