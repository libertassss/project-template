import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

const create = (children:any) => {
    let div = document.createElement('div');
    div.className = 'hp-loading';
    document.body.appendChild(div);
    return ReactDOM.createPortal(
        children,
        div
    );
};

// 单例 保持页面始终只有一个loading
let loading : any;
const getNewLoading = (children:any) => {
    
    return <div className="hp-loading">{children}</div>;
};

const render = (visible: boolean) => {
    let dom = visible ? getNewLoading(<div className="loading-content"><svg width="200px"  height="200px" className="lds-ring"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={{background: "none"}}>
    <circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke="{{config.base}}" ng-attr-stroke-width="{{config.width}}" fill="none" r="20" stroke="rgba(100%,100%,100%,0)" stroke-width="10"></circle>
    <circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-width="{{config.innerWidth}}" ng-attr-stroke-linecap="{{config.linecap}}" fill="none" r="20" stroke="#c01e2f" stroke-width="3" stroke-linecap="square" transform="rotate(123.952 50 50)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1" dur="1.5s" begin="0s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="stroke-dasharray" calcMode="linear" values="12.566370614359172 113.09733552923255;62.83185307179586 62.83185307179586;12.566370614359172 113.09733552923255" keyTimes="0;0.5;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
    </circle>
</svg></div>) : getNewLoading(<div className="loading-content">
    <div className="loading-img"></div>
</div>);
    return dom;
};

 

const Loading = (props = { visible: false }) => {
    const [visible, setVisible] = useState(props.visible);
    useEffect(() => {
        if (visible === props.visible) {
            return;
        }
        setVisible(props.visible);
    });

    return (
        render(visible)
    );
};

export default Loading;
