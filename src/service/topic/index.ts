
import { request } from '../request';
import { incentiveApi } from '../config';

export type params = {
    activityId?: number
}

/**
 * 获取当前用户在某话题下的排名信息
 * @param params 
 */
const userRank = async (params: params) => {
    return request(`${incentiveApi()}/activity/user/rank`,params, 'GET').then((res: any) => res);
}

const topicRankList = async (params: params) => {
    return request(`${incentiveApi()}/activity/rank`, params, 'GET').then((res: any) => res)
}

export {
    userRank,
    topicRankList
}