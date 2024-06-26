import { useNavigate } from 'react-router-dom'
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch  } from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'
import SearchBox from './SearchBox'
import O from '../assets/O .png'

const Header = () => {
  const { cartItems } = useSelector((state ) => state.cart )
  const { userInfo } = useSelector((state ) => state.auth )
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <header>
      <Container>
      <Navbar bg="light" data-bs-theme="light" expand="md" collapseOnSelect>
        <Container>
           <LinkContainer to='/'>
              <Navbar.Brand>
              <img src={O } alt = "OJKart" className='image-sizing'/>
                ProKart
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                  <SearchBox />
                  <LinkContainer to= '/cart'className='ms-md-2'>
                    <Nav.Link>
                      <FaShoppingCart /> Cart
                       {
                        cartItems.length > 0 && (
                        <Badge pill bg='success' style={{marginLeft: 
                        '5px'}}>
                           { cartItems.reduce((a, c) => a + c.qty, 0)}
                        </Badge>
                        )
                       }
                     </Nav.Link>
                  </LinkContainer>   
                   { userInfo ? (
                    <NavDropdown title={userInfo.name} id='username'>
                      <LinkContainer to='profile'>
                          <NavDropdown.Item> Profile </NavDropdown.Item>
                      </LinkContainer>
                         <NavDropdown.Item onClick={logoutHandler}>
                          Logout
                         </NavDropdown.Item>
                    </NavDropdown>
                   ) : (<LinkContainer to= '/login'>
                     <Nav.Link>
                      <FaUser/>   Login
                      </Nav.Link>
                  </LinkContainer>
                ) }
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title='Admin' id='adminmenu'>
                      <LinkContainer to='/admin/orderList'>
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/productList'>
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/userList'>
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                  </NavDropdown>
                )}
                  
                </Nav>
             </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    </header>
  )
}

export default Header
