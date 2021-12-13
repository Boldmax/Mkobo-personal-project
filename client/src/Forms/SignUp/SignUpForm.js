import React, { useState } from 'react';
import content from "./signUpdata"
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import { Link, useHistory,Redirect } from "react-router-dom";
import illustration from "../../LandingPage/Images/SignUp.png";
import logo from "../../LandingPage/Images/logo.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
/* import '../form.css'; */
import axios from 'axios';
import EmailConfirm from '../EmailConfirm';
import { Container,
    FormContainer,
    Header,
    IllustrationImg,
    Illustration,
    LogoImg,
    FormHolder,
    Form,
    FormHandler,
    Label,
    Input,
    Span,
    Button,
    Paragraph,
    Anchor,
    Bvn } from "./SignUp.styled";


const schema = yup.object().shape({
    BVN: yup.string().required("BVN is required").matches(/^[0-9]+$/, "Enter a valid BVN").min(11, "Enter a valid BVN").max(11),
    EmailAddress: yup.string().required("Enter a valid Email Address").email(),
    Password: yup.string().required("Password is required").min(8, 'Must be at least 8 character'),
    Password2: yup.string().oneOf([yup.ref('Password'), null], 'Password does not match').required("Confirm password"),
})


export default function SignUpForm() {

      //modal handler
    const [show, setShow] = useState(false);
    const closePageHandler = () => setShow(false);

    const history = useHistory();
    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    let onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:4000/form/register', data)
            .then(res => console.log(res))
            return <Redirect to='/loginform' />
   //     history.push()
    };

 

    console.log(errors);

    return (
        <>
        <Container >
            <FormContainer >
                <Illustration >
                    <LogoImg src={logo} alt="" />
                    <IllustrationImg src={illustration} alt="" />
                </Illustration>
                <FormHolder >
                    <Header>Create Account</Header>
                    <Bvn className="BVN">We use your BVN to ensure that your account belong to you. <br />(Dial *565*0# to view BVN)</Bvn>
                    <Form  onSubmit={handleSubmit(onSubmit)}>
                        {content.inputs.map((input, key) => {
                            return (
                                <FormHandler  key={key}>
                                    <>
                                        <Label for={input.label} >{input.label}</Label>
                                        <Input
                                            id="sUpfor"
                                            type={input.type}
                                            name={input.name}
                                            ref={register}
                                        />
                                    </>
                                    <Span >{errors[input.name]?.message}</Span>
                                </FormHandler>
                            )
                        })}
                        <Button id="sUpbutton" type="submit" className="btn btn-outline-none" value="submit">Create Account</Button>
                        <Paragraph>Already a User? <Anchor to="/loginform">Log in</Anchor></Paragraph>
                    </Form>
                </FormHolder>
            </FormContainer>
        </Container>
        <EmailConfirm show={show} close={closePageHandler} />
        </>
    )
}