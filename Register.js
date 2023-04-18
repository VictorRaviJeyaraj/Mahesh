import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button  from "react-bootstrap/Button";
import Col  from "react-bootstrap/Col";
import { InputGroup } from "react-bootstrap/InputGroup";
import Row  from "react-bootstrap/Row";

function Register(){
    const[validated,setValidated] = useState(false);
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[obj,setObj]=useState(
                               {
                                 firstName:'',
                                 lastName :'',
                                 email : '',
                                 password:''
                               });
    const handleSubmit = (event) => {
        debugger;debugger;
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            setValidated(true);
        alert('FirstName = '+obj.firstName+'\n LastName :'+obj.lastName+'\n email : '+obj.email+'\n password :' +obj.password);
        }
        
    };

    const onChange = (e) => {
        if (e.target.type === 'checkbox' && !e.target.checked) {
            setObj({...obj, [e.target.name]: e.target.checked});
        } else {
            setObj({...obj, [e.target.name]: e.target.value });
        }
     }
    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="be-ex-content ext-lasi-content-templates__heading">
             <h3 className="text-primary title sub-heading">Do you have user ID ?</h3>
             <div className="font-weight-normal sub-title sub-heading-desc"><p>If you already been sent User ID, please
                select <strong>Yes, i have a user ID</strong></p></div>
            </div>
            <Row className="mb-3">
                <Form.Group className="mb-3">
                    <Form.Check
                     inline
                     required
                     type='radio'
                     name="rdoUserId"
                     label="yes, I have a User ID"
                     feedback="you must agree before submitting."
                     feedbackType="invalid"
                     />
                     <Form.Check
                     inline
                     required
                     type='radio'
                     name="rdoUserId"
                     label="No"
                     feedback="you must agree before submitting."
                     feedbackType="invalid"
                     />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col}  controlId="validationCustom01">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                     required
                     type='text'
                     name="firstName"
                     placeholder="First Name"
                     defaultValue=""
                    //  onChange={(event)=>{setFirstName(event.target.value)}}
                    onChange={onChange}
                     />
                     <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                     <Form.Control.Feedback type="invalid">Please provide First Name</Form.Control.Feedback>
                </Form.Group>
                
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col}  controlId="validationCustom02">
            <Form.Label>Last Name</Form.Label>
                <Form.Control
                     required
                     type='text'
                     name="lastName"
                     placeholder="Last Name"
                     defaultValue=""
                    //  onChange={(event)=>{setLastName(event.target.value)}}
                     onChange={onChange}
                     />
                     <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                     <Form.Control.Feedback type="invalid">Please provide Last Name</Form.Control.Feedback>
                     </Form.Group>
                     </Row>

                     <Row className="mb-3">
            <Form.Group as={Col}  controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
                <Form.Control
                     required
                     type='email'
                     name="email"
                     placeholder="Email"
                     defaultValue=""
                    //  onChange={(event)=>{setEmail(event.target.value)}}
                     onChange={onChange}
                     />
                     <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                     <Form.Control.Feedback type="invalid">Please provide valid email</Form.Control.Feedback>
                     </Form.Group>
                     </Row>

                     <Row className="mb-3">
            <Form.Group as={Col}  controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
                <Form.Control
                     required
                     type='password'
                     name="password"
                     placeholder="Paswword"
                     defaultValue=""
                     onChange={onChange}
                     />
                     <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                     <Form.Control.Feedback type="invalid">Please provide valid email</Form.Control.Feedback>
                     </Form.Group>
                     </Row>

                     <Row className="mb-3">
            <Form.Group as={Col}  controlId="validationCustom05">
            <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                     required
                     type='password'
                     name="confirmPassword"
                     placeholder="Confirm Paswword"
                     defaultValue=""
                     />
                     <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                     <Form.Control.Feedback type="invalid">Please provide valid email</Form.Control.Feedback>
                     </Form.Group>
                     </Row>
                     <Button type="submit">Register</Button>
        </Form>
    )
}

export default Register;