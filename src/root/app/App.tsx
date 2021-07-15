import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Header from '../../libs/ui/components/layouts/Header/Header';
import Wrapper from './Wrapper';
import store from "../../libs/utils/store";
import './style.scss';
import ErrorPopup from "../../libs/ui/components/modals/ErrorPopup";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app">
                    <Header />
                    <Wrapper />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
