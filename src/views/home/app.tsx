import { InitAPP } from 'src/config/app';
import { bridgDataType } from 'src/config/bridge';
import React, { FC } from 'react';
import { render } from 'react-dom';
import Root from './root';
import { BrowserRouter } from 'react-router-dom';
import 'src/style/reset.css';
const basename = process.env.NODE_ENV == 'development' ? '/' : 'home';
interface propsType {}



const App : FC<propsType> = () => {
    return (
        <BrowserRouter basename={basename}>
            <Root/>
        </BrowserRouter>
    )
}

InitAPP((res: bridgDataType) => {
    render(<App />, document.getElementById('root'));
    if (module.hot) {
        module.hot.accept();
    }
})

