import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"

// uploading video
export const uploadVideo = async (video) => {
    // pot to http://localhost:4000/videos
    return await commonAPI("POST",`${BASE_URL}/videos`,video)
}

// get all videos form json server
export const getAllVideos = async () => {
    // http get request ot http://localhost:4000/videos for getting video from json server and return response to View component
    return await commonAPI("GET",`${BASE_URL}/videos`,"")
}

// get a single video form json server
export const getAvideo = async () => {
    // http get request to http://localhost:4000/videos for getting video from json server and return response to VideoCard component
    return await commonAPI("GET",`${BASE_URL}/videos`,"")
}

// delete a single video json server
export const deleteAVideo = async (id) => {
    // http delete to http://localhost:4000/videos for getting video from json server and return response to VideoCard component
    return await commonAPI("DELETE",`${BASE_URL}/videos/${id}`,{})
}

// insert video in watch history

export const addToHistory = async (videoHistory) => {
    // http post request to http://localhost:4000/history for adding video history to json server and return response to videoCard component
    return await commonAPI("POST",`${BASE_URL}/history`,videoHistory)
}

// get video watch history from json server
export const getHistory = async () => {
    // http post request to http://localhost:4000/history for adding video history to json server and return response to watchHistory component
    return await commonAPI("GET",`${BASE_URL}/history`,"")
}

// get video watch history from json server
export const deleteHistory = async (id) => {
    // http delete request to http://localhost:4000/history/id for deleting video history to json server and return response to watchHistory component
    return await commonAPI("DELETE",`${BASE_URL}/history/${id}`,{})
}


// adding category
export const addCategory = async (body) =>{
    // http delete to http://localhost:4000/categories for adding video from json server and return response to Category component
    return await commonAPI("POST",`${BASE_URL}/categories`,body)
}

// get all category
export const getAllCategory = async () => {
    // http get request to http://localhost:4000/categories for adding category in json server and return response to category component
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
}

// remove category
export const deleteCategory = async (id) =>{
    // http delete request to http://localhost:4000/categories/id for deleting video from json server and return response to category component
    return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
}

// update category form json server

export const updateCategory = async (id,updatedCategory) =>{
    // http put request to http://localhost:4000/categories/id for updating existing category from json server and return response to category component
    return await commonAPI("put",`${BASE_URL}/categories/${id}`,updatedCategory)
}
