import {
    VIDEO_LIST_REQUEST,
    VIDEO_LIST_SUCCESS,
    VIDEO_LIST_FAILURE
} from './actionTypes';

const INITIAL_STATE = {
    loading: false,
    videoList:[]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case VIDEO_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case VIDEO_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                videoList:action.payload
            };
        case VIDEO_LIST_FAILURE:
            return {
                ...state,
                loading: false
            };

        default:
            return state
    }
};
