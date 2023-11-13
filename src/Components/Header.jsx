import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand className='text-dark fw-bolder fs-4'>
          <Link to={'/'} style={{textDecoration:"none",color:'#fff'}}>
            <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>{' '}
              Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header