import React from 'react';
import './index.less';

const types = ['wx','wxline','qq','qzone','sina'];

const ShareDom = (props: any) => {
    const { onClick = () => {}, closeShare = () => {}, noShare = false } = props;
    return (
        <div className="share-dom-h5-modal" onClick={closeShare}>
           {
               noShare ? <div className="go-share">
                   点此处分享分享更多好友
               </div> :<ul className="share-dom-h5">
               {
                   types.map(( item, index ) => 
                       <li key={index} onClick={ () => onClick(item)} className={`share-dom-${item}`}></li>
                   )
               }
           </ul>
           } 
        </div>
    )
}

export default ShareDom;