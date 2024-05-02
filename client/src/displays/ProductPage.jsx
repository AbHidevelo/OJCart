import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from '../components/Meta'
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation
} from '../slices/productsApiSlice'
import { addToCart } from '../slices/cartSlice'


const ProductPage = () => {
   const { id: productId } = useParams()

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [qty, setQty] = useState(1)
   const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

   const { data: product, isLoading, refetch, error } = useGetProductDetailsQuery(productId)
   
   const addToCartHandler = () => {
    dispatch(addToCart({...product, qty}))
    navigate('/cart')  
 }

 const { userInfo } = useSelector((state) => state.auth);

 const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

    const submitHandler = async (e) => {
      e.preventDefault();
  
      try {
        await createReview({
          productId,
          rating,
          comment,
        }).unwrap();
        refetch();
        toast.success('Review created successfully');
        setRating(0);
        setComment('');
        
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    };

 

  return (
    <>
      <Link className='btn btn-light my-3' to= '/'>
        Go Back
      </Link>
      
      { isLoading? 
      <Loader/> : error? 
      (<Message variant='danger'>
        {error?.data?.message || error.error}
        </Message>
      )  : (
        <>
        <Meta title={product.title}/>
      <Row>
        <Col md={5}>
         
           <Image src={product.images} alt={product.title}  fluid/>
       
        </Col>

        <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.title}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                     <Rating value={product.rating} text={`reviews`} />
                </ListGroup.Item>

                <ListGroup.Item>
                Price: ${product.price}
               </ListGroup.Item>
               <ListGroup.Item>
                Description: {product.description}
               </ListGroup.Item>
            </ListGroup>

         </Col>

        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                         <Row>
                            <Col>
                              Price:
                            </Col>
                            <Col>
                               <strong>${product.price}</strong>
                            </Col>
                         </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                         <Row>
                            <Col>
                              Status:
                            </Col>
                            <Col>
                               <strong>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                            </Col>
                         </Row>
                    </ListGroup.Item>
                    <ListGroup.Item >

                     { product.stock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col><strong>Quantity:</strong></Col>
                          <Col>
                          <Form.Control
                           as= 'select'
                           value= {qty}
                           onChange={(e) => setQty(Number(e.target.value))}>
                            {[...Array(product.stock).keys().map((x) => (
                                <option key={ x + 1 } value={ x + 1 }>
                                  { x + 1 }
                                </option>
                            ))]}
                           </Form.Control>
                          </Col>
                        </Row>
                      
                        </ListGroup.Item>
                     )}
  
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row>
                      <Col>
                      <Button 
                            className='btn-block' 
                            type='button'
                            disabled={product.stock === 0} 
                            onClick={addToCartHandler}
                            >
                            Add to Cart
                        </Button>
                      </Col>
                      </Row>  
                    </ListGroup.Item>
                </ListGroup>
  
            </Card>
        </Col>
      </Row>
      <Card className='mt-3'>
        <Card.Header>
          <h2>
            Reviews
           </h2>
        </Card.Header>
      <Row className='review'>
            <Col md={1}></Col>
            <Col md={10} className= 'mt-3'>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>

                  {loadingProductReview && <Loader />}

                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group className='my-2' controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          required
                          value={rating}
                          onChange={(e) => setRating(Number(e.target.value))}
                        >
                          <option value=''>Select...</option>
                          <option value= '1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className='my-2' controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          required
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={1}></Col>  
      </Row>
      </Card>
      </>
    )}
      
    </>
  )
}

export default ProductPage
