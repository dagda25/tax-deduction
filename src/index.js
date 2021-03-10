import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./app";
import {fetchData} from "./store/api-actions";
import store from "./store/store";


store.dispatch(fetchData())
.then(

    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`)
    )

);
