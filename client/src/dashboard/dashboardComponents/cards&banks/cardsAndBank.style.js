import styled from 'styled-components';


export const SmallCard = styled.div`
position: relative;
display: block;
height: 200px;
width: 450px;
background: #A9B1C0;
margin-top: 4rem;
box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
border-radius: 10px;
margin-left: 2rem;

@media (max-width: 1280px) {
width: 400px;
height: 200px;
}

@media (max-width: 1024px) {
   width: 420px;
   height: 172px;
}

@media (max-width: 768px) {
   margin-left: auto;
   margin-right: auto;
}

@media (max-width: 414px) {
   width: 320px;
   height: 200px;
}

@media (max-width: 360px) {
   width: 320px;
   height: 200px;
}
`

export const LargeCard = styled.div`
position: relative;
display: block;
height: 200px;
width: 350px;
background: rgba(169, 177, 192, 1);
margin-top: 4rem;
box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
border-radius: 10px;
margin-left: 2rem;

@media (max-width: 1280px) {
height: 190px;
width: 320px;
}

@media (max-width: 1024px) {
   width: 420px;
   height: 172px;
}

@media (max-width: 768px) {
   width: 420px;
   height: 172px;
   margin-left: auto;
   margin-right: auto;
}

@media (max-width: 414px) {
   width: 320px;
   height: 200px;
}

@media (max-width: 360px) {
   width: 320px;
   height: 220px;
}
`

export const OtherCards = styled.div`
position: relative;
display: block;
height: 200px;
width: 460px;
background: #ffffff;
margin-top: 4rem;
box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
border-radius: 10px;
margin-left: 2rem;


@media (max-width: 1280px) {
width: 400px;
height: 200px;
}

@media (max-width: 1024px) {
   margin-left: auto;
   margin-right: auto;
}

@media (max-width: 768px) {
   margin-left: auto;
   margin-right: auto;
}

@media (max-width: 414px) {
   width: 320px;
   height: 200px;
}

@media (max-width: 360px) {
   width: 320px;
   height: 200px;
}
`

export const MainCards = styled.div`
position: relative;
display: block;
height: 200px;
width: 350px;
background: ${(props) => props.visa ? "linear-gradient(282.62deg, #06348F 26.89%, #0248CD 101.6%)" : "linear-gradient(279.64deg, #CD0565 -9.09%, #7233B1 80.25%)"};
margin-top: 4rem;
box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
border-radius: 10px;
margin-left: 2rem;

@media (max-width: 1280px) {
height: 190px;
width: 320px;
}

@media (max-width: 1024px) {
   width: 420px;
   height: 172px;
}

@media (max-width: 414px) {
   width: 320px;
   height: 200px;
   margin-left: auto;
   margin-right: auto;
}

@media (max-width: 360px) {
   width: 320px;
   height: 200px;
}
`

export const Title = styled.h2`
    display: block;
    width: auto;
    max-width: 15rem;
    margin-left: 2rem;
    margin-top: 2rem;
    font-size: 32px;
    font-weight: 600;
    color: #233862;
`

export const Nav = styled.a`
    display: block;
    width: 8rem;
    max-width: 11rem;
    margin-left: 2rem;
    margin-top: 2rem;
    font-size: 16px;
    font-weight: 600;
    color: #AAC6CE;
    text-decoration: none;

    &:hover{
        color: #0248CD;
        border-bottom: 3px solid #0248CD;
    }

    &:focus{
        color: #0248CD;
        border-bottom: 3px solid #0248CD;
    }

    @media (max-width: 414px) {
    width: 7rem;
    max-width: 11rem;
}

@media (max-width: 384px) {
    width: 6.5rem;
}

   @media (max-width: 360px) {
    width: 6rem;
    max-width: 11rem;
}
`

export const BankEmpty = styled.h4`
    display: block;
    width: auto;
    max-width: 5rem;
    margin: auto;
    margin-top: 1rem;
    font-size: 18px;
    font-weight: 600;
    color: #233862;
`

export const BankDesc = styled.h4`
    display: block;
    width: 25rem;
    margin: auto;
    margin-top: 1rem;
    font-size: 14px;
    text-align: center;
    font-weight: 400;
    line-height: 21px;
    color: #AAC6CE;
`

export const Button = styled.button`
    display: block;
    width: 12rem;
    height: 3rem;
    margin: auto;
    margin-top: 3rem;
    outline: none;
    border: none;
    background: #0248CD;
    color: #ffffff;
`

export const Cross = styled.h4`
    display: block;
    font-size: 36px;
    margin: auto;
    margin-top: 4rem;
    width: 2rem;
    color: #676E7D;
`

export const CrossDecsrip = styled.h4`
    display: block;
    font-size: 14px;
    margin: auto;
    margin-top: ${(props) => props.copy ? "0.5rem" : "2.5rem"};
    width: 7rem;
    color: #676E7D;
`

export const Bank = styled.h4`
    display: block;
    font-size: 12px;
    margin-left: 2rem;
    margin-top: 1rem;
    width: 7rem;
    color: #233862;
    line-height: 18px;
    font-weight: 400;
`
export const AccountNumber = styled.h4`
    display: block;
    font-size: 24px;
    margin-left: 2rem;
    margin-top: 0.5rem;
    width: 8rem;
    color: #233862;
    line-height: 36px;
    font-weight: 700;
 `

export const Accounttag = styled.h4`
    display: block;
    font-size: 14px;
    margin-left: 2rem;
    margin-top: 1rem;
    width: 7rem;
    color: #233862;
    line-height: 21px;
    font-weight: 400;
`

export const CardOwner = styled.h4`
    display: block;
    font-size: 15px;
    margin-left: 2rem;
    margin-top: 5rem;
    width: 7.8rem;
    color: #ffffff;
    line-height: 21px;
    font-weight: 600;

@media (max-width: 414px) {
    margin-top: 5rem;
}
`

export const CardNumber = styled.h4`
    display: block;
    font-size: 15px;
    margin-left: 2rem;
    margin-top: 2rem;
    width: 7.9rem;
    color: #ffffff;
    line-height: 21px;
    font-weight: 600;
    `

export const Logo = styled.div`
position: absolute;
display: block;
width: 3rem;
height: 1.5rem;
background-image: url(${props => props.visa ? props.image : props.Master});
background-repeat: no-repeat;
background-position: center;
/* background-size: cover; */
margin: -2rem auto auto 17rem;

@media (max-width:1280px){
margin: -2rem auto auto 15rem;
}
`