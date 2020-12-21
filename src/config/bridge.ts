import { isInApp } from '@hupu/bridge';


interface bridgDataType{
    night?: number, //是否为夜间，1为夜间模式，0为日间模式
    nopic?: number, //是否为无图模式，1为无图模式，0为有图模式
    islogin?: number, //是否登录，1为已登录，0为未登录
    version?: string, //app 应用版本
    client?: string, //客户端client
    fontSize?: number, //字体大小，[14,16,18,20,22]
    env?: number, //客户端环境，1为线上，2为预发布，3为测试
    hybridVer?: string, //bridge 版本
    cookies?: string, //night=0;abctype=0 webview 注入cookie
    puid?: string,    //用户uid
    platform?: string, //平台
    device?: string, //机型
    osVer?: string, //操作系统
    isWifi?: string, //是否为wifi环境
    o_vp?: string,  //帖子内页离线包版本
    nickname?: string, //	用户昵称
    cid?: number,  // 69623353	设备id
    channel?: string //'error'	渠道来源
    titlebar_hight?: number
}



const getEnv = () => {
    let env = 1;
    if(!isInApp){
        if(process.env.NODE_ENV == 'development'){
            env = 3;
            return env;
        }else{
            if(!!~location.href.indexOf("test") || !!~location.href.indexOf("sit")){

                env = 3;
                console.log('app外env',env);
                return env;
            }
            if(!!~location.href.indexOf("lite-pre")){

                env = 2;
                console.log('app外env',env);
                return env;
            }
            if(!!~location.href.indexOf("lite")){

                env = 1;
                console.log('app外env',env);
                return env;
            }
        }
    }
}




const bridgDefaultData : bridgDataType = {
    night: !!~location.href.indexOf("night=1")?1:0,
    nopic: !!~location.href.indexOf("nopic=1")?1:0,
    client: 'x120',
    islogin: 1,
    fontSize: 16,
    version: "7.3.0",
    cookies: 'night=0; abctype=0',
    env: getEnv(),
    puid: '',
    platform: '',
    titlebar_hight: 46
}




export {
    bridgDefaultData
};
export type { bridgDataType };

