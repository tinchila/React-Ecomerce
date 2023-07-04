import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../../components/CartWidget/CartWidget';


function NavBar() {
return (
    <div className='Navbar'>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
            src="https://static.vecteezy.com/system/resources/previews/020/927/305/original/tecno-brand-logo-phone-symbol-white-design-chinese-mobile-illustration-with-black-background-free-vector.jpg"
            width="150"
            height="100"
            className="d-inline-block align-top"
            alt="Tecno House"
            />
        </Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <div clas="m-4 p-4" className='Carrito'>
                <Nav.Link href="#pricing" className="Cart"><CartWidget/></Nav.Link>
            </div>
            
        </Nav>
        </Container>
    </Navbar>
    </div>
)
}
export default NavBar;