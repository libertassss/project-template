import { request } from './request';
import { incentiveApi } from './config';

/**
 * 判断用户是否关注曼联专区
 */
const isFollows = async () => {
    return request(`${incentiveApi()}/users/follow`, {}, 'GET').then((res: any) => res);
}

/**
 * 关注曼联专区
 */
const followTopic = async () => {
    return request(`${incentiveApi()}/users/follow/topic`, {}, 'GET').then((res: any) => res);
}

/**
 * 检查当前用户是否参与活动
 * @param param activityId 互动Id
 */
const checkeJoin = async (param: { activityId: number}) => {
    return request(`${incentiveApi()}/activity/joinStatus`, param, 'GET').then((res: any) => res);
}

/**
 * 获取微信jsAPi初始化配置信息
 * @param param 
 */
const getWechatNeed = async (param: any) => {
    return request (`https://lite.hupu.com/feiyan/weixinShareConfig`,param,'GET').then((res: any) => res);
}

/**
 * 参与活动
 * @param param activityId 活动Id
 */
const activityJoin = async (param: { activityId: number}) => {
    return request(`${incentiveApi()}/activity/join`, param, 'GET').then((res: any) => res);
}

/**
 * 活动参与人数
 * @param param activityId  活动Id
 */
const joinCount = async (param: { activityId: number} = {activityId: 1}) => {
    return request(`${incentiveApi()}/activity/Join/count`, param, 'GET').then((res: any) => res)
}


export {
    isFollows,
    followTopic,
    checkeJoin,
    activityJoin,
    getWechatNeed,
    joinCount
}
