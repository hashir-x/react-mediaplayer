import React, { useEffect, useState } from 'react'
import { Button, Row,Col, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAllCategory, getAvideo, updateCategory } from '../services/allAPI'
import VideoCard from './VideoCard';

function Category() {

  const [categories,setCategories] = useState([])
  const [categoryName,setCategoryName] = useState("")

  const insertCategory = async () => {
    if(categoryName){
      let body = {
        categoryName,allVideos:[]
      }
      // make api call
      const response = await addCategory(body)
      if(response.status>=200 && response.status<300){
        // reset state
        setCategoryName("")
        // modal hide
        handleClose()
        // call getCategories
        getCategories()
      }
      else{
        toast.warning("UPloading error ! Please try after sometime.")
      }
    }
    else{
      // alert
      toast.info("Please fill the from completely.")

    }
  }

  const getCategories = async () => {
    const {data} = await getAllCategory()
    setCategories(data)
  }

  useEffect(()=>{
    getCategories()
  },[])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeCategory = async (id) => {
    // make api call
    await deleteCategory(id)
    // get all category
    getCategories()
  }

  const videoDrop = async (e,categoryId) => {
    const videoCardId = e.dataTransfer.getData("cardId")
    // get video details
    const {data} = await getAvideo(videoCardId)
    let selectCategory = categories.find(item=>item.id===categoryId)
    selectCategory.allVideos.push(data)
    await updateCategory(categoryId,selectCategory)
    getCategories()
  }

  const dragOverCategory = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="d-grid">
        <button className="btn btn-info"  onClick={handleShow}>Add New Category</button>
      </div>
      {
        categories?categories.map(item=>(
          <div className='border p-3 rounded mt-3 mb-3' onDragOver={(e)=>dragOverCategory(e)} droppable onDrop={(e)=>videoDrop(e,item?.id)}>
            <div className="d-flex justify-content-between">
              <h5>{item?.categoryName}</h5>
              <button onClick={()=>removeCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <Row>
              {
                item?.allVideos && item?.allVideos.map(card =>(
                  <Col sm={12} className='p-1 mb-2'>
                    <VideoCard displayData={card} insideCategory={true}/>
                  </Col>
                )) 
              }
            </Row>
          </div>
        )):
        <p className='fw-bolder fs-5  text-danger mt-3'>Sorry NOthing to display</p>
      }
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form className='border p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
            <Button  variant="primary" onClick={insertCategory}>
            Add
            </Button>
          </Modal.Footer>
        </Modal>
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

export default Category