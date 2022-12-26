import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/Logo/PLogo.gif'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderM>
        <HeaderMov>
            <Link to='/projects'>Projects</Link>
            <Link to='/'>
                <LogoSized src={Logo}/>
            </Link>
            <Link to='/news'>News</Link>
        </HeaderMov>
    </HeaderM>
  )
}

const HeaderM = styled.div`
    padding:  0px 32px 0px 32px;
`

const HeaderMov = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
`




const LogoSized = styled.img`
    width: 70px;
    height: 70px;
    @media (min-width: 1024px) {
        width: 140px;
        height: 140px;
    }


`
