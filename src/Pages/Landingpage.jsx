import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

  const navigateByUrl = useNavigate()

  const navigate = () => {
    navigateByUrl('/home')
  }

  return (
    <>
      <Row className='mb-5 align-items-center mt-5'>
        <Col></Col>
        <Col md={4}>
          <h4>Welcome to<span className='text-warning'> Media Player</span></h4>
          <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis adipisci repellat earum doloribus ea fugit consequatur provident error quia, tempora autem vel officia facere, delectus dignissimos quidem? Culpa, autem...</p>
          <button onClick={navigate} className='btn btn-success fw-bolder'>Get Started</button>
        </Col>
        <Col></Col>
        <Col md={6}>
          <img className='img-fluid' src="https:sd-lb.com/wp-content/uploads/2019/08/Social-Media-PNG-Transparent.png" alt="landing" />
        </Col>
      </Row>
      <div className="container flex-column mt-5 mb-5 d-flex justify-content-center align-items-center">
        <h3>Features</h3>
        <div className="features mt-5 d-flex justify-content-between w-100">
          {/*  */}
        <Card className='p-3 shadow' style={{ width: '22rem' }}>
        <Card.Img style={{height:"18.75rem",width:'18.75rem'}} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
        <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card>
        {/*  */}
        <Card className='p-3 shadow' style={{ width: '22rem' }}>
        <Card.Img style={{height:"18.75rem",width:'18.75rem',borderRadius:'10rem'}} variant="top" src="https://i.pinimg.com/originals/79/ab/9f/79ab9f804b5ebbdd514af3329cad6e0c.gif" />
        <Card.Body>
        <Card.Title>Categories Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card>
        {/*  */}
        <Card className='p-3 shadow' style={{ width: '22rem' }}>
        <Card.Img style={{height:"18.75rem",width:'18.75rem'}} variant="top" src="https://redtechnologiesinc.com/wp-content/uploads/2018/09/video-icon-gif2.gif" />
        <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
      </div>
      <div className="container border rounded p-5 border-secondary shadow mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="content">
          <h4 className='text-warning mb-5'>Simple, Fast and Powerful</h4>
          <h6><span className='fs-5 me-3'>Play Everything :</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla provident iste, atque reiciendis excepturi dolorum amet con ipsum anim....</h6>
          <h6><span className='fs-5 me-3'>Categorise Videos :</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ipsam nostrum adipisci? Dolorum, maiores atque cumque adipisci do...</h6>
          <h6><span className='fs-5 me-3'>Managing History :</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic recusandae obcaecati velit sapiente vel! Iusto ab totam ullam facere officia id dicta consequafd gg...</h6>
        </div>
        <div className='video'>
          <iframe width="1013" height="570" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Landingpage