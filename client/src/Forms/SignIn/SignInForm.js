import React from "react";
import content from "./signIndata";
/* import './form.css'; */
import { useHistory } from "react-router-dom";
import illustration from "../../LandingPage/Images/SignIn.png";
import logo from "../../LandingPage/Images/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import {
  Container,
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
} from "./SignIn.style";

const schema = Yup.object().shape({
  EmailAddress: Yup.string().required("Enter a valid Email Address").email(),
  Password: Yup.string().required("Password is required"),
});

export default function SignInForm() {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  // authentication
  const onSubmit = (data) => {
    console.log(data)
    axios.post("http://localhost:4000/form/login", data).then((res) => {
      const token = res.data.accessToken;
      localStorage.setItem("JWT", token);

      // setToken(getFromLS())
      if (token) {
        history.push("/dashboard/Investment");
      }
    });
  };

  return (
    <Container>
      <FormContainer>
        <Illustration>
          <LogoImg src={logo} alt="banner" />
          <IllustrationImg src={illustration} alt="banner" />
        </Illustration>
        <FormHolder>
          <Header>Log in</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {content.inputs.map((data, key) => {
              return (
                <FormHandler key={key}>
                  <>
                    <Label /* for={data.label} */>{data.label}</Label>
                    <Input type={data.type} name={data.name} ref={register} />
                  </>
                  <Span > {errors[data.name]?.message} </Span>
                </FormHandler>
              );
            })}
            <Paragraph href="#">Forgot password?</Paragraph>
            <Button
              type="submit"
              className="btn btn-outline-none"
              value="submit"
               
            >
              Log in
            </Button>
            <Paragraph>
              Don't have an account? 
              <Anchor to="signupform">Create an account</Anchor>
            </Paragraph>
          </Form>
        </FormHolder>
      </FormContainer>
    </Container>
  );
}

/* SignInForm.proptype = {
    setToken: Proptypes.func.isRequired
}; */
