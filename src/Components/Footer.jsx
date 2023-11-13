import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <hr />
      <div className='d-flex flex-column align-items-center justify-content-center' style={{width:'100%',height:'18.75rem'}}>
        <div className="footer d-flex justify-content-evenly w-100">
          {/*  */}
          <div style={{width:'25rem'}} className="website">
            <h4>
              <i className='fa-solid fa-cloud-arrow-up fa-bounce'></i>{' '}
              Media Player
            </h4>
            <h6>
              Designed and build with all the love in the world by the Bootstrap team with the help of our contributors.
            </h6>
            <h6>Code licensed MIT, docs CC ByY 3.0.</h6>
            <h6>Currently v5.3.2.</h6>
          </div>
          {/*  */}
          <div className="link d-flex flex-column">
             <h4>Links</h4>
             <Link style={{textDecoration:"none",color:'#fff'}} to={'/'}>Landing Page</Link>
             <Link style={{textDecoration:"none",color:'#fff'}} to={'/home'}>Home Page</Link>
             <Link style={{textDecoration:"none",color:'#fff'}} to={'/watch-history'}>Watch History</Link>
          </div>
          {/*  */}
          <div className="guides d-flex flex-column">
             <h4>Guides</h4>
             <Link style={{textDecoration:"none",color:'#fff'}} to={'https://react.dev/'}>React</Link>
             <Link style={{textDecoration:"none",color:'#fff'}} to={'https://react-bootstrap.netlify.app/'}>React Bootstrap</Link>
             <Link style={{textDecoration:"none",color:'#fff'}} to={'https://www.w3schools.com/react/react_router.asp'}>Routing</Link>
          </div>
        </div>
        <p>Copyright © 2023 Media Player. Built with React.</p>
      </div>
    </>
  )
}

export default Footer