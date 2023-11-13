import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoServerResponse}) {

  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  const [allVideos,setAllVideos] = useState([])
  const getAllUploadedVideos = async () =>{
    const {data} = await getAllVideos()
    setAllVideos(data)
  }

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])

  return (
    <>
      <Row>
        {
          allVideos.length > 0?
          allVideos.map(video=>(
            <Col className='d-flex justify-content-center align-items-center' sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
          ))
        : <p className='fw-bolder fs-5 text-danger mt-3'>Sorry nothing to display</p>
        }
      </Row>
    </>
  )
}

export default View