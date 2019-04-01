import {
    VIDEO_LIST_REQUEST,
    VIDEO_LIST_SUCCESS,
    VIDEO_LIST_FAILURE
} from './actionTypes';
import axios from 'axios';
import * as api from '../../constants/api';

const videoRequest = (dispatch) => {
    dispatch({
        type: VIDEO_LIST_REQUEST,
    });
};


const videoSuccess = (dispatch, list) => {
    dispatch({
        type: VIDEO_LIST_SUCCESS,
        payload: list
    });
};

const videoFailure = (dispatch, error) => {
    dispatch({
        type: VIDEO_LIST_FAILURE,
        payload: error
    });
};

export const fetchList = (page) => {
	return (dispatch) => {
	const url = api.API_VIDEO_LIST;
    videoRequest(dispatch);
    axios.get(url)
      .then(res => {
          videoSuccess(dispatch, res.data.videos)
        })
      .catch(error => videoFailure(dispatch, error));
};
};
