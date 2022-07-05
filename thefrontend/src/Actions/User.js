import axios from "axios"


export const loginUser = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "loginRequest",
      });
  
      const { data } = await axios.post(
        "/api/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
     

      dispatch({
        type: "loginSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "loginFailure",
        payload: error.response.data.message,
      });
    }
  };

  export const loadUser =() => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
  
      const { data } = await axios.get("/api/myinfo");
      dispatch({
        type: "LoadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LoadUserFailure",
        payload: error.response.data.message,
      });
    }
  };
 
  export const followingPost = () => async (dispatch)=>{
    try {
      dispatch({
        type:"postOfFollowingRequest"
      })
      const { data } = await axios.get("/api/follwoingpost");
      dispatch({
        type:"postOfFollowingSuccess",
        payload:data.posts
      })
      
    } catch (error) {
      dispatch({
        type:"postOfFollowingFailure",
        payload: error.response.data.message,

      })
    }
  }