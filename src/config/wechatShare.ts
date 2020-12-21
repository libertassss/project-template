import { setShare } from "./app";

declare const window: {
    wx: any,
    location: any
};
const { wx } = window;

export type shareDataType = {
  title?: string ,
  text?: string,
  img_url?: string ,
  link?: string
}

const shareData : shareDataType= {
    title: '点个亮就能换份“爱心早餐”！这波JR在大气层>>',
    text: '做每个人的“小小英雄”',
    img_url: 'http://i11.hoopchina.com.cn/hupuapp/kanqiu/202011/kanqiu_0_20201116162146_1051112318.png',
    link: `https://lite.hupu.com/incentive/hero/myRank`
}

const wechatShare = (shareDataParam: shareDataType = shareData ) => {
    wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
        wx.updateTimelineShareData({ 
          title: shareDataParam.title, // 分享标题
          link: shareDataParam.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareDataParam.img_url, // 分享图标
          success: function () {
  
          }
        })
        wx.updateAppMessageShareData({ 
          title: shareDataParam.title, // 分享标题
          desc: shareDataParam.text, // 分享描述
          link: shareDataParam.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareDataParam.img_url, // 分享图标
          success: function () {
            // 设置成功
          }
        })
    }); 

    setShare(shareDataParam.title, shareDataParam.text, shareDataParam.img_url, shareDataParam.link)
    
}

export default wechatShare;