import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {  

  const [video,setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })

  // 
  const extractLink= (e) => {
    const {value} = e.target
    if(value){
      const embed = `https:/www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:embed})
    }
    else{
      setVideo({...video,embedLink:""})
    }
  }
// 

// modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// 

// 
const handleUpload = async () =>{
  const {id,caption,url,embedLink} = video
  if(!id || !caption || !url || !embedLink){
    toast.warning("Please fill all the fields...")
  }
  else{
  // make api call
  const response = await uploadVideo(video)
  if(response.status>=200 && response.status<300){
    // reset state
    setVideo({
      id:"",caption:"",url:"",embedLink:""
    }) 
    // set server response
    setUploadVideoServerResponse(response.data)
    // modal hide
    handleClose()
    toast.success(`"${response.data.caption}" is uploaded successfully.`)
  }
  else{
    toast.error("Please fill unique id for uploading videos")
  }  
  }
}

  return (
    <>
    <div className='d-flex align-items-center'>
      <h5>Upload New Video</h5>
      <button className='btn' onClick={handleShow}>
        <i className='fa-solid fa-circle-plus fs-3 ms-1'></i>
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details.</p>
          {/*  */}
          <Form className='border p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter YouTube Video Link" onChange={extractLink}/>
            </Form.Group>
          </Form>
          {/*  */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
    <ToastContainer />
    </>
  )
}

export default Add