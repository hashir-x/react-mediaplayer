import React, { useState } from 'react'
import Add from '../Components/Add';
import { Link } from 'react-router-dom';
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {

  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})

  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-item-center">
    <Add setUploadVideoServerResponse = {setUploadVideoServerResponse}/>
    <Link style={{textDecoration:'none',color:'#fff'}} className='fs-5' to={"/watch-history"}>Watch History</Link>
    </div>
    <div className="mb-5 mt-5 container-fluid d-flex justify-content-between">
      <div className="all-videos col-lg-8">
        <h3>All Videos</h3>
        <View setUploadVideoServerResponse = {setUploadVideoServerResponse}/>
      </div>
      <div className='col-lg-1'></div>
      <div className='col-lg-3'>
        <Category/>
      </div>
    </div>
    </>
  )
}

export default Home