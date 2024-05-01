import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { savePaymentMethod } from "../slices/cartSlice"
import { Form, Button, Col } from 'react-bootstrap'
import CheckoutSteps from '../components/CheckoutSteps'
import FormContainer from "../components/FormContainer"

const PaymentPage = () => { 
  const [paymentMethod, setPaymentMethod] = useState('UPI')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  useEffect(() => {
    if(!shippingAddress) {
        navigate('/shipping')
    }
  }, [shippingAddress, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 step4 />
      <h1>Payment Method</h1>
       <Form onSubmit={ submitHandler }>
        <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
              <Form.Check
               type="radio"
               className="my-2"
               label= 'UPI or Bank Account'
               id="UPI"
               name="paymentMethod"
               value='UPI'
               checked
               onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
        </Form.Group>
        
        <Button type="submit" variant="primary">
            Continue
        </Button>
       </Form>
    </FormContainer>
  )
}

export default PaymentPage
