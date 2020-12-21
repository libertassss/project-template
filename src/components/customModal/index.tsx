import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './index.less';
import cns from 'classnames';
import { CSSPropertyDescriptor } from 'html2canvas/dist/types/css/IPropertyDescriptor';

interface customModalProps {
    children?: any,
    visible?: boolean,
    preLoad?: boolean,
    style?: any
}
const CustomModal : FC<customModalProps> = (props: customModalProps) => {
    const [ visibleState, setVisibleState ] = useState<boolean | undefined>();
    const { visible, preLoad, style } = props;
    useEffect(() => {
        if(props.visible){
            document.body.classList.add('hidden');
        }else{
            document.body.classList.remove('hidden');
        }
    },[props.visible])

    return createPortal(<div style={style} className={cns( visible ? 'visible-modal' : 'portals-container')}>{visible && props.children}</div>, document.body)
    
}

export default CustomModal;