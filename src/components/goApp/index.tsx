import React, { FC } from 'react';
import './index.less';

interface goAppProp {
    link?: string
}

const GoApp : FC<goAppProp> = (props: goAppProp) => {
    const { link = '' } = props;
    return (
        <button className="go-app-btn" onClick={() => {window.location.href = link }}>在App内打开</button>
    )
}

export default GoApp;