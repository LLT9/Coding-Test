import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ReactNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
                <Nav.Link
                    href='/login'
                    className={({ isActive }) => (isActive ? 'link active' : 'link')}
                >Login
                </Nav.Link>
        <Nav.Link
            href='/'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
            Welcome
        </Nav.Link>
        <Nav.Link
            href='/about'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
            About
        </Nav.Link>
          </Nav>
          <Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ReactNavBar;