import { Button, Navbar, Nav } from 'react-bootstrap';



function bootstrap(){

    return(
        <div>
                    <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">My React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Button variant="primary">Click me</Button>

        </div>
    )
}

export default bootstrap;