import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating' 

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to ={`/product/${product._id}`}></Link>
        <Card.Img src={product.images} variant='top' className='product-image' />
        
        <Card.Body>
            <Link to ={`/product/${product._id}`}>
            <Card.Title as='div' className='product-title'>
                <strong>{product.title}</strong>   
            </Card.Title> 
            </Link> 

            <Card.Text as='div'>
              <Rating value={product.rating} text={`reviews`}/> 
            </Card.Text>   

            <Card.Text as= 'h3'>
                ${product.price}
            </Card.Text>
        </Card.Body>
      
    </Card>
  )
}

export default Product
