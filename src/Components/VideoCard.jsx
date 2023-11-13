import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteAVideo } from '../services/allAPI';

function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = async () => {
    setShow(false)
    // add video to watch history
    // get time stamp for playing the video
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US', {year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit",second:"2-digit"}).format(today)
    const {caption,embedLink} = displayData
    // watch history
    const videoHistory = {
      caption,embedLink,timeStamp
    }
    // make api call
    await addToHistory(videoHistory)
    }
 

  const handleShow = () => setShow(true);

  // deleting a video
  const removeVideo = async (id) => {
    // make api call
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }

  const dragStarted = (e,id) => {
    e.dataTransfer.setData("cardId",id)
  }

  return (
    <>

        { displayData &&
          <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
          <Card.Img onClick={handleShow} style={{height:"11.25rem",width:'11.25rem'}} variant="top" src={displayData?.url} />
          <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-center w-100'>
              <h6>{displayData?.caption}</h6>
              { insideCategory?"":
                <button onClick={()=>removeVideo(displayData?.id)} className="btn"><i className='fa-solid fa-trash text-danger'></i></button>
                }
            </Card.Title>
          </Card.Body>
        </Card>
        }
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400"} src={`${displayData?.embedLink}?autoplay=1`} title="Learn React In 30 Minutes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        </Modal>
      
    </>
  )
}

export default VideoCard