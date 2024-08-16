import {Button, Form, FormGroup, FormLabel, FormText} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const LoginForm = () =>{
    const navigate = useNavigate();


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle password changes
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        validatePasswords(e.target.value, confirmPassword);
    };

    // Function to handle confirm password changes
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        validatePasswords(password, e.target.value);
    };

    // Function to validate if passwords match
    const validatePasswords = (password, confirmPassword) => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
        }
    };

    // // Function to handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!error) {
    //         // Proceed with form submission
    //         console.log('Form submitted');
    //     }
    // };
    const handleNavigation = (url) => {
        navigate(url);
    }


    return(
        <div className={"col-6"}>
            <Form>
                <FormGroup>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={"Enter your name"}
                        // value={"formData.password"}
                        // onChange={handleChange}
                    />
                </FormGroup>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder={"Enter your last name"}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder={"Enter your email"}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder={"Enter your password"}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="text" placeholder={"Enter your password to confirm"}></Form.Control>
                </Form.Group>

                <Button type={"submit"}>Create Account</Button>
            </Form>
            <Button onClick={ ()=> handleNavigation("/")}>Back</Button>
        </div>


    )
}
export default LoginForm