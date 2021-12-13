import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #e7e3e3;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 65vw;
  background-color: #ffffff;
`;

export const Header = styled.h2`
  margin-top: 2rem;
  display: flex;
  color: #0248cd;
  width: 18rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -0.015em;
`;

export const Illustration = styled.div`
  position: relative;
  width: 50%;
  height: 80vh;
  background: linear-gradient(
    180deg,
    #0248cd -7.44%,
    #a7c1f3 -7.43%,
    #ffffff 123.17%
  );
`;

export const IllustrationImg = styled.img`
  display: block;
  width: 88%;
  height: 51.7vh;
  margin: 6rem auto auto 2.5rem;

  @media (max-width:1536px){
  width: 75%;
  height: 50.7vh;
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 7rem;
  height: 2.9rem;
  margin-top: 2rem;
  margin-left: 1.5rem;
  z-index: 99;
`;

export const FormHolder = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
`;

export const Form = styled.form`
  margin-top: 12px;
  display: block;
  position: relative;
  height: 55vh;

  @media (max-width:1536px){
  width: 100%;
  height: 50.7vh;
  }

  @media (max-width:1366px){
  margin-top: 12px;
  }
`;

export const FormHandler = styled.div`
  margin-top: 1rem;
  display: grid;
  width: 39rem;
  justify-content: center;

  @media (max-width:1536px){
  width: 31rem;
  }

  @media (max-width:1440px){
  width: 29rem;
  }

  @media (max-width:1366px){
  width: 27.5rem;
  margin-top: 0.5rem;
  }

  @media (max-width:1280px){
  width: 26rem;
  }
`;

export const Label = styled.label`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  color: #233862;
  justify-content: flex-start;
  margin-left: 0px;
`;

export const Input = styled.input`
  display: block;
  width: 419px;
  height: 46px;
  border: 1px solid #5d81a2 30%;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  @media (max-width:1536px){
  width: 22rem;
  }

  @media (max-width:1440px){
  width: 20rem;
  height: 38px;
  }
`;

export const Span = styled.span`
  display: block;
  position: absolute;
  color: red;
  font-size: 0.8rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  z-index: 10;

/*   display: flex;
  font-size: 14px;
  font-weight: bold;

  justify-content: flex-start;
  margin-left: 0px; */
`;

export const Button = styled.button`
  display: block;
  font-size: 1rem;
  background-color: #a9b1c0;
  color: #676e7d;
  width: 419px;
  height: 42px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.6rem;
  border: none;
  outline: none;

  &:hover {
    background-color: #0248cd;
    color: #ffffff;
  }

  @media (max-width:1536px){
  width: 22rem;
  }

  @media (max-width:1440px){
  width: 20rem;
  height: 38px;
  }
`;

export const Paragraph = styled.span`
  margin-top: 14px;
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => (props.copy ? "#000000" : "#233862")};
  line-height: 19px;
  margin-left: ${(props) => (props.copy ? "0rem" : "105px")};
  text-decoration: none;

  @media (max-width:1536px){
  margin-left: ${(props) => (props.copy ? "0rem" : "75px")};
  }

  @media (max-width:1440px){
  margin-left: ${(props) => (props.copy ? "0rem" : "74px")};
  }

  @media (max-width:1366px){
  margin-left: ${(props) => (props.copy ? "0rem" : "63px")};
  }
`;


export const Anchor = styled(Link)`
  margin-top: 14px;
  font-size: 13px;
  font-weight: 600;
  color: #000000;
  line-height: 19px;
  margin-left: 5px;
  text-decoration: none;

  @media (max-width:1536px){
  margin-left: 5px;
  }
`

export const Bvn = styled.span`
    position: relative;
    display: block;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 26rem;
    font-size: 12px;
    font-weight: 400;
    color: #AAC6CE;

@media (max-width:1536px){
    width: 22rem;
  }

@media (max-width:1440px){
    width: 20.3rem;
  }
`