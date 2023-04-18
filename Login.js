import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const[data,setData] = useState({'email':'','Password':''});
  const handleChange = (e)=>{
setData({...data,[e.target.name]:e.target.value});
  }
  const handleSubmit =()=>{
    localStorage.setItem("userId",data.email);
    window.location.reload();
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="Password" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
      <Alert key='primary' variant='primary'>
        {/* <Link to="/Register"> */}
          <Alert.Link href="/Register">Register</Alert.Link>
          {/* </Link> */}
          If you don't have account please signup/register here
        </Alert>
        
    </Form>
  );
}

export default Login;