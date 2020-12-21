
import { bridgDataType, bridgDefaultData } from '../config/bridge';
interface hostInfo{
  protocol: string,
  host: string,
  hostGdc: string,
  incentiveApi: string,
  liteApi: string
}
interface settings {
  test: hostInfo,
  pre: hostInfo,
  production: hostInfo
}

const settings : settings = {
  'test':{
    'protocol': '//',
    'host': '//test.mobileapi.hupu.com',
    "liteApi":`//lite-test.hupu.com`,
    'hostGdc':'//gdc-soccerapi-tst.hupu.com',
    'incentiveApi': '//incentive-api-sit.hupu.com/incentive'
  },
  'pre':{
    'protocol': '//',
    'host': '//games-pre.mobileapi.hupu.com',
    'hostGdc':'//gdc-soccerapi-stg.hupu.com',
    "liteApi": '//lite-pre.hupu.com',
    'incentiveApi': '//incentive-api-stg.hupu.com/incentive'
  },
  'production':{
    'protocol': '//',
    "liteApi": '//lite.hupu.com',
    'host': '//games.mobileapi.hupu.com',
    'hostGdc': '//gdc-soccerapi.hupu.com',
    'incentiveApi': '//incentive-api.hupu.com/incentive'
  }
};

let origin: string = settings['production'].incentiveApi;
let condEnv : hostInfo = settings['production'];
let NaInfo: bridgDataType = bridgDefaultData;

const addRest = () => {
  const platform = NaInfo.platform === 'iOS' ? 2 : 1;
  const version = NaInfo.version;
  return `${platform}/${version}`;
};



export function getEnv(res: bridgDataType ) {
  const { env } = res;
  NaInfo = res;
  switch(env){
    case 1:
      condEnv = settings['production'];
      origin = settings['production'].incentiveApi;
            
      break;
    case 2:
      condEnv = settings['pre'];
      origin = settings['pre'].incentiveApi;
            
      break;
    case 3:
      condEnv = settings['test'];
      origin = settings['test'].incentiveApi;
            
      break;
    default:
      condEnv = settings['production'];
      origin = settings['production'].incentiveApi;
      break;
  }
}

export function incentiveApi(){
  if(process.env.NODE_ENV == 'development'){
    return `http://local.hupu.com:8888/api`;
  }
  return origin;
}



export function gamesApi(){
  if(process.env.NODE_ENV == 'development'){
    return `api/${addRest()}`;
  }
  return `${condEnv.protocol}${condEnv.host}/${addRest()}`;
}

export function gdcApiPlatform(){
  return `${origin}/${addRest()}`;
}







