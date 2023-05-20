import ActionTypes from './actionType';
import ApiMethod from '../../component/api/apiMethod';
import Alert from '../../component/pages/alert'

export const getAll = () => async (dispatch) => {
  try {
    const res = await ApiMethod.findAll();
    dispatch({
      type: ActionTypes.GET_USER,
      payload: res.data.result,
    });
  } catch (error) {
    alert(error);
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await ApiMethod.GetById(id);
    dispatch({
      type: ActionTypes.GET_USER_ID,
      payload: res.data.result,
    });
  } catch (error) {
    alert(error);
  }
};

export const userUpdate = (data) => async (dispatch) => {
  console.log(data)
  try {
    const res = await ApiMethod.update(data);
    console.log(res.data)
    dispatch({
      type: ActionTypes.UPDATE_USER,
      payload: res.data
    });
    if (res.data.status) {
      if (res.data.status == 200) {
        Alert.AlertSucces(res.data.message);
      } else {
        Alert.AlertError(res.data.message);
      }
    }
  } catch (error) {
    return error.message
  }
};

export const DelUser = (data) => async (dispatch) => {
  try {
    const res = await ApiMethod.deleteUser(data);
    dispatch({
    type: ActionTypes.DEL_USER,
      payload: res.data.result,
    });
    if (res.data.status == 200) {
      Alert.AlertSucces(res.data.message);
    }
  } catch (error) {
    alert(error);
  }
};
