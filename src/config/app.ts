
import Task, { isInApp, isAndroid, isIOS } from '@hupu/bridge';
import { bridgDataType, bridgDefaultData } from './bridge';

declare const window: {
  nainfo: bridgDataType,
  HupuBridge: any
};


/**
 * 获取客户端信息
 */
const InitAPP = (cb? : (res: bridgDataType) => void) => {
  if(!isInApp) {
    window.nainfo = bridgDefaultData;
    cb && cb(bridgDefaultData);
  }else{
    Task.getUserInfo({
      success: function(res:bridgDataType) {
        window.nainfo = res;
        cb && cb(res);
      }, 
      fail: function(res: bridgDataType) {
        window.nainfo = res;
        cb && cb(res);
      }
    });
  }       
};


const setTitle = (title?: string,subTitle?: string) => {
  Task.setTitle({
    title: title,
    subTitle: subTitle
  });
};

const closeSlide = () => {
  Task.closeSlideGesture();
};

const openSlide = () => {
  Task.openSlideGesture();
};

const openLogin = () => {
  console.log('登录bridge');
  Task.openLogin();
}

const getInfo = () => {
  return window.nainfo;
};

const copy = (content?: string) => {
  return Task.copy(content);
}

/**
 * 关闭原生导航
 */
const hideNav = () => {
  Task.onHideNavBar();
};

/**
 * 自定义分享
 */
export function shareLink(title: string,text: string,imgUrl: string,link: string) {
  window.HupuBridge.send('hupu.share.custom',{
    imageUrl: imgUrl,
    title: title,
    text: text,
    linkUrl: link
  }, function(status:boolean){
    if(status){
      console.log('分享成功');
    } else{
      console.log('分享失败');
    }
  });
}

const setShare = (title: string = '',desc: string = '',imageUrl: string = '',linkUrl: string = '') => {
    Task.onShareNativeMessage({
      imageUrl: imageUrl,
      title: title,
      text: desc,
      linkUrl: linkUrl
    }, function(status: any){
      if(status){
          console.log("分享成功");
      } else{
          console.log("分享失败");
      }
    });
}

export function closeWindow(){
  Task.closeWebview();
}



const sharePicture = ( base64: string) => {
  console.log(base64)
  const _type = isAndroid ? 4 : 1;
  const shareFreeConfig = {
    platform: [
      //分享平台及类型
      {channel: 'wx', type: _type}, // 微信 type == 3 时为小程序分享
      {channel: 'qq', type: 1}, // QQ
      {channel: 'wb', type: 2}, // 微博
      {channel: 'qzone', type: 0}, // qq空间
      {channel: 'moments', type: _type}, // 朋友圈base64图文分享
    ],
    img_source: base64,
    share_material: {
      'wx': {
          title: '',
          text: '',
          img_url: '',
          link: ''
      },
      'moments': {
          title: '',
          text: '',
          img_url: '',
          link: ''
      },
      'qq': {
          title: '',
          text: '',
          img_url: '',
          link: ''
      },
      'wb': {
          title: '',
          text: '',
          img_url: '',
          link: ''
      },
      'qzone': {
          title: '',
          text: '',
          img_url: '',
          link:''
      }
  },
  };

  if (isAndroid) {
    Task.onShareFreedomMessage(Object.assign(shareFreeConfig, {
      extra_data: { // 分享内容附加参数
        params: {
          img_dom: base64,
          img_new: true,
        },
        url: `https://lite.hupu.com/feiyan/same`,
        share_source: 'soccer',
        pid: 123,
        tid: 123
      }
    }));
  }

  if (isIOS) {
    Task.onShareFreedomMessage(shareFreeConfig);
  }

}



export {
  InitAPP,
  setTitle,
  getInfo,
  hideNav,
  closeSlide,
  openSlide,
  openLogin,
  sharePicture,
  setShare,
  copy
};