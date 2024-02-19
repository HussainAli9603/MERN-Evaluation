import axios from "axios";
import { server } from "../../server";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUserRequest",
    });
    const { data } = await axios.get(`${server}/user/all-users`);
    
    dispatch({
      type: "getAllUserSuccess",
      payload: data.users,
    });
    // console.log(data);

  } catch (error) {
    dispatch({
      type: "getAllUserFail",
      payload: error.response.data.message,
    });
  }
};
