import React, { useState,useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup,  Button, Form } from "react-bootstrap";
import Rating from "../Rating";
import Loader from "../Loader";
import Message from "../Message";
import { listProductsDetails } from "../../actions/productActions";

const ProductScreen = () => {
  const [qty,setqty] = useState(0);
  const { id } = useParams();
  const  history  = useNavigate();
  // const product = products.find(p => p._id === matchMedia.id)
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  
  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch,id]);


  const addToCartHandler = () => {
     history(`/cart/${id} ? qty=${qty}`)
  }
  // const product = {};

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>: (
          <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>
                Description : {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Ststus:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                    <Form.Control as='select' value={qty} onChange={(e) => setqty(e.target.value)}>
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>{x+1}</option>
                      ))}
                    </Form.Control>
                    </Col> 
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                onClick={addToCartHandler}
                  className="btn-black"
                  type="button"
                  disable={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) }
      
    </>
  );
};

export default ProductScreen;
