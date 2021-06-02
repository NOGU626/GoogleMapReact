import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import store, { persistor }  from "./stores/";
import './index.css';
import main from "./main";

const App = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Route exact path="/" component={main}/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
