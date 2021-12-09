import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Cta>
                <LogoOne src="/images/cta-logo-one.svg" />
                <Signup>Get All There</Signup>
                <Description>
                    I'm an Animator/Motion Graphics Artist and a Web developer, based in Karachi, Pakistan, I have serious Passion for UI Effects, Animations and I really love to Code.
                </Description>
                <LogoTwo src="/images/cta-logo-two.png" />

            </Cta>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image : url("/images/login-background.jpg");
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
const Cta = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;

    
`
const LogoOne = styled.img`
    
    
`
const LogoTwo = styled.img`
    
    
`
const Description = styled.p`
    font-size: 11px;
    line-spacing: 1.5px;
    text-align: center;
    line-height: 15px;

    
`
const Signup = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align : center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background : #0483ee;
    }
`