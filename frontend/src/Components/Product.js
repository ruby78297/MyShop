import React, { useState, useEffect } from "react";

import { Card, CardImg, Nav } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Nav.Link as={Link} to={`product/${product._id}`}>
          <CardImg src={product.image} variant="top" />
        </Nav.Link>
        <Card.Body>
          <Nav.Link as={Link} to={`product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Nav.Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews}  reviews`}
            />
            <div>
              {product.rating} from {product.numReviews}
              Reviews
            </div>
          </Card.Text>
          <Card.Text className="py-3" as="h3">
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
