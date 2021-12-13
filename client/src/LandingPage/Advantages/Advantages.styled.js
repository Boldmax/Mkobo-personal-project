import styled from 'styled-components';


export const Cards = styled.div`
display: block;
position: relative;
height: 15rem;
width: 48vw;

@media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 80vw;
}
`

export const Content = styled.p`
margin-left: 60px;
color: #ffffff;
font-size: 16px;
width: 40vw;
font-weight: 500;
line-height: 27.52px;

&:hover{
    color: #ffffff;
}

@media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    text-align: center;
}

@media (max-width: 425px) {
    font-size: 15px;
    width: 70vw;
}
`

export const Header = styled.h3`
position: relative;
display: block;
width: 530px;
font-weight: 700;
margin-left: 60px;
color: #ffffff;
font-size: 32px;
line-height: 48px;

@media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    text-align: center;
}

@media (max-width: 425px) {
    font-size: 26px;
    width: 320px;
}
`

export const Image = styled.img`
height: 80%;
width: 100%;

/* @media (max-width: 425px) {
    
} */
`

export const ImageBody = styled.div`
display: flex;
justify-content: flex-start;
width: 52%;

@media (max-width: 800px) {
    width: 100%;
}

@media (max-width: 768px) {
    width: 100%;
}
`

export const CardBody = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 110vh;
width: 48%;
margin-top: 0px;
padding-bottom: 2rem;

@media (max-width: 800px) {
    width: 100%;
}

@media (max-width: 768px) {
    width: 100%;
}
`