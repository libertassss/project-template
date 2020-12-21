import React, { FC } from 'react';
import { Modal } from 'antd-mobile';
import './index.less';

interface breakFirstCerProp {
    visible?: boolean,
    closeModal?: () => void,
    children?: any,
    className?: string,
    title?: string
}
const BreakFirstCer : FC<breakFirstCerProp> = (props: breakFirstCerProp) => {
    const { visible = false, closeModal = () => {}, children, className, title } = props;
    return (
       <>
            <Modal
                className={className}
                visible={visible}
                transparent
                maskClosable={false}
                onClose={closeModal}
                title={title}
            >
               {children} 
            </Modal>
        </>
    )
}

export default BreakFirstCer;