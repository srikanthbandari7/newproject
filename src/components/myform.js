import { Form, Button } from 'react-bootstrap';
import React from 'react';

export default ()=> {
  return (
    <div  className='' >
    <Form  style={{width:'700px', margin:'auto'}} >
    <h3>Please login using your credentials</h3>
      <Form.Group className='form-control'>
        <Form.Label   >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text><br/>
    
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
         <Form.Check type="checkbox" label="Remember Me!" />
      </Form.Group><br/>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

