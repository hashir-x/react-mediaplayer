import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'

function WatchHistory() {

  const [history,setHistory] = useState([])
  const getWatchHistory = async () => {
    // make api call
    const {data} = await getHistory()
    setHistory(data)
  }

  useEffect(()=>{
    getWatchHistory()
  },[])

  const handleDeleteHistory = async (id) => {
    // make api call
    await deleteHistory(id)
    // get all history after deletion
    getWatchHistory()
  }

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-5 mb-5">
        <h4>Watch History</h4>
        <Link to={'./home'} style={{textDecoration:'none',color:'#fff',fontSize:'1.25rem'}}><i className='fa-solid fa-arrow-left'></i> Back to Home</Link>
      </div>
      <div className="border p-5 container rounded mt-5 mb-5">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              history.length>0?
              history.map((item,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
              <td>{item?.timeStamp}</td>
              <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
            ))
            : <p className='fw-bolder fs-5 text-danger mt-3'>Sorry Nothing to display!</p>
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchHistory