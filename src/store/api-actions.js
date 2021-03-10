import {ActionCreator} from "./action";
import {APIRoute} from "../utils/const";

export const fetchData = () => (dispatch, _getState, api) => (
  api.get(APIRoute.POSTS)
    .then(({data}) => {
      dispatch(ActionCreator.getData(data));
    })
);
