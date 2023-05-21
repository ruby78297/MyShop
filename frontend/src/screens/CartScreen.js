import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import {
  Link,
  useParams,
  useNavigate,
  useLocation,
  redirect,
} from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../Components/Message";

const CartScreen = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    // dispatch(removeFromCart(id));
    dispatch(removeFromCart(id));
  };
  const Navigate = useNavigate();
  const checkOutHandler = () => {
    // dispatch(removeFromCart(id));
    Navigate("/login?redirect=shipping");
  };

  return (
    <Container>
      <Row style={{ margin: "4%" }}>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart is Empty. <Link to={"/"}>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <FormControl
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </FormControl>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col
          xs={12}
          md={4}
          className="border d-flex flex-column align-items-center"
        >
          <ListGroup.Item className="border text-center">
            <div className="mb-4">
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
            </div>
            <div className="mb-4">
              <h3>
                Total: $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </h3>
            </div>
            <Button
              className="btn btn-primary w-100"
              type="button"
              disabled={cartItems.length === 0}
              onClick={checkOutHandler}
            >
              Proceed to Checkout
            </Button>
          </ListGroup.Item>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
