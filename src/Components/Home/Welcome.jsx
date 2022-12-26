import React from 'react'
import styled from 'styled-components'
import LandingImg from '../../assets/image/Gatee.jpg'


export default function Welcome() {
  return (
    <Main>
        <Image src={LandingImg}/>
        <WelcomeTo>Welcome to my world</WelcomeTo> 
    </Main>
  )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;

`

const WelcomeTo = styled.h1`
    position: absolute;
    top: 30%;
    right: 37%;
    color: #ff5858;
`

const Image = styled.img`
    height: 700px;
`

// const Arrows = styled.img`
//     height: 50px;
//     width: 50px;

// `