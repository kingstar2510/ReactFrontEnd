import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTB>
        <CTBLogoOne />
        <Signup>GET ALL HERE</Signup>
        <Description>
          Get access to all latest books, novels, magzines and all other interesting things, which will help to increase your knowledge and remember knowledge is power.
        </Description>
      </CTB>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position : relative;
    height : calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;


    &:before {
      background-position:top;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url("/images/login.jpeg");
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      opacity: 0.6;
    }
`

const CTB = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const CTBLogoOne = styled.img`
`

const Signup = styled.a`
  width: 100%;
  background-color: blue;
  font-weight: bold;
  padding: 17px 0px;
  border-radius: 4px;
  text-align : center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 5px;

  &:hover{
    background: #0483ee;
  }
`

const Description = styled.div`
    background-color: black;
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align : center;
    line-height: 1.5;
`