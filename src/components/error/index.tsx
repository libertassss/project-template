import React, { PureComponent } from 'react';
import './index.less';

interface ErrorProps {
    text: string;
}

export default class Error extends PureComponent<ErrorProps, any> {
    render() {
        return (
            <div className="detail-error">
                <p>{this.props.text}</p>
            </div>
        );
    }
}
