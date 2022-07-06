import axios from "axios"


  export const likeDislikePost = (id) => async (dispatch)=>{
    try {
      dispatch({
        type:"likeRequest"
      })
      const { data } = await axios.get(`/api/post/${id}`);
      dispatch({
        type:"likeSuccess",
        payload:data.message
      })
      
    } catch (error) {
      dispatch({
        type:"likeFailue",
        payload: error.response.data.message,

      })
    }
  }