import { Button, Navbar, Nav, Table } from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Reactbootstrap() {

    const [data, setData] = useState([]);

    useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(result=>setData(result.data))
    },[])
  return (
    <div className="">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="https://chat.openai.com/chat">
          My React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Button variant="contained">Click me</Button>
      <Table striped bordered hover >
            <thead  className="table-dark">
                <tr>
                    <th>S.NO</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE NO</th>
                    <th>USERNAME</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((res, i)=>(
                        <tr key={i} >
                            <td>{i+1}</td>
                            <td>{res.name}</td>
                            <td>{res.email}</td>
                            <td>{res.phone}</td>
                            <td>{res.username}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </div>
  );
}

export default Reactbootstrap;
