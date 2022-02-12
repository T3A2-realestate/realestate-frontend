import React, { useState } from "react";
//Bootstrap
import { Alert, Form, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Formik & Yup
import { Formik, Form as BaseForm } from "formik";
import { object, string } from "yup";

const Sell = () => {
  
  return (
    <div
      className="flex 
    flex-col
    bg-white
    shadow-md
    px-16
    sm:px-6
    md:px-8
    lg:px-10
    py-32
    rounded-3xl
    w-100
    max-w-md 
    mx-auto"
    >
      <div className="font-medium self-center text-xl sm:text-3xl text-gray-800 mx-auto">
        Sell property
      </div>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="address">
          <Form.Label column sm={2}>
            Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="address" placeholder="Address" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="price">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="price" placeholder="price" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="bedroom">
          <Form.Label column sm={2}>
            Bedroom
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="bedroom" placeholder="bedroom" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="bathroom">
          <Form.Label column sm={2}>
            Bathroom
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="bathroom" placeholder="bathroom" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="size">
          <Form.Label column sm={2}>
            Size
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="size" placeholder="size" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="description">
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="description" placeholder="description" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="agency">
          <Form.Label column sm={2}>
            Agency
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="agency" placeholder="agency" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="phone">
          <Form.Label column sm={2}>
            Phone
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="phone" placeholder="phone" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="email">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="title">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="title" placeholder="title" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="suburb">
          <Form.Label column sm={2}>
            Suburb
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="suburb" placeholder="suburb" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="category">
          <Form.Label column sm={2}>
            Category
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="select" type="category">
              <option className="d-none" value="">
                Select status
              </option>
              {["1", "2", "3", "4", "5"].map((option) => (
                <option key={option}>Option {option}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="status">
          <Form.Label column sm={2}>
            Suburb
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="select" type="status">
              <option className="d-none" value="">
                Select status
              </option>
              {["1", "2", "3", "4", "5"].map((option) => (
                <option key={option}>Option {option}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Click here to submit form
        </Button>
      </Form>
    </div>
  );
};

export default Sell;
