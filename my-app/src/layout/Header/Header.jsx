import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import { AuthToken } from "../../assets/constants/const";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-bootstrap';
library.add(fas)


export const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem(AuthToken);   
   
  
    return (
    <Navbar collapseOnSelect expand="lg" className={style.header} fixed="top">
      <Container fluid>

        <Navbar.Brand href="/about" className='ms-5'> DogFood{'    '}
          <FontAwesomeIcon icon="fa-solid fa-paw" size='sm' style={{color: "#545454",}}/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={style.toggle}/>
          <Navbar.Collapse id="responsive-navbar-nav" className=''>

            <Form className={style.search}>
                  <Form.Control
                    type="search"
                    placeholder="Поиск"
                    className="rounded-pill"
                    aria-label="Search"
                  />
                  <Button variant="btn-outline">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size='lg' style={{color: "#545454",}} className="me-4"/>
                  </Button>
              </Form>

              <Nav className={style.icons}>
                  <Nav.Link href="/basket">
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size='xl' style={{color: "#545454",}} />
                  </Nav.Link>
                  <Nav.Link href="/favouriteItems">
                    <FontAwesomeIcon icon="fa-solid fa-heart" size='xl' style={{color: "#545454",}} />
                  </Nav.Link>
                  <Nav.Link href="/personalPage">
                    <FontAwesomeIcon icon="fa-solid fa-user" size='xl' style={{color: "#545454",}} />
                  </Nav.Link>
              </Nav>
            
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" size='xl' style={{color: "#545454",}} 
              className={`${token? `me-4`: `${style.exitNotDisplayed}`}`} 
              onClickCapture={()=>{
                localStorage.clear() 
                navigate('/')}
              }/>
            
         </Navbar.Collapse> 
      </Container>
    </Navbar>
        )
}