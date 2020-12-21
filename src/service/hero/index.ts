
import { request } from '../request';
import { incentiveApi } from '../config';

const productList = async () => {
    return request(`${incentiveApi()}/integral/productList`, {activityId: 1}, 'GET').then((res: any) => res);
}
/**
 * 
 * @param param productId
 */
const exchangeItem = async (param: any) => {
    return request(`${incentiveApi()}/integral/applyForGift`, param, 'GET').then((res: any) => res);
}

const achievement = async () => {
    return request(`${incentiveApi()}/integral/achievement`, {activityId: 1}, 'GET').then((res: any) => res);
}

const integralDetail = async (params: { pageIndex?: number, pageSize?: number} = {pageIndex: 1, pageSize: 20}) => {
    return request(`${incentiveApi()}/integral/detail`, {...{activityId: 1},...params}, 'GET').then((res: any) => res);
}

/**
 * 
 * @param param activityId
 */
const getItemPoints = async () => {
    return request(`${incentiveApi()}/activity/hero/overview`, {activityId: 1}, 'GET').then((res: any) => res);
}

/**
 * 
 * @param param activityId integralEquivalent ruleId
 */
const shotGetPoint = async (param: any) => {
    return request(`${incentiveApi()}/activity/hero/shot`, param, 'GET').then((res: any) => res);
}

/**
 * 
 * @param param rankType
 */
const rankList = async (param: any) => {
    return request(`${incentiveApi()}/integral/rank`, param, 'GET').then((res: any) => res);
}

/**
 * 
 * @param productId 
 */
const productDetail = async (productId: string) => {
    return request(`${incentiveApi()}/integral/product/${productId}/detail`).then((res: any) => res)
}

/**
 * 获取组团列表
 */
const groupBuys = async (params: { pageIndex?: number, pageSize?: number, productId?: number} = { pageIndex: 1, pageSize: 5}) => {
    return request(`${incentiveApi()}/activity/groupBuys`, params, 'GET').then((res: any) => res);
}


/**
 * 我的组团
 */
const myGroupBuys = async (params: { pageIndex?: number, pageSize?: number, productId?: number} = { pageIndex: 1, pageSize: 5}) => {
    return request(`${incentiveApi()}/activity/groupBuy/user`, params, 'GET').then((res: any) => res);
}

/**
 * 参与拼团
 * @param orderId 
 */
const joinGroup = async (orderId?: number, productId?: number) => {
    return request(`${incentiveApi()}/activity/groupBuy/join/${orderId}`, {'productId': productId}, 'GET').then((res: any) => res);
}

/**
 * 发起拼团
 * @param params productId
 */
const startGroup = async (params?: {productId?: number}) => {
    return request(`${incentiveApi()}/activity/groupBuy/start`, params, 'GET').then((res: any) => res);
}


/**
 * 取消拼团
 * @param orderId 
 */
const cancelGroup = async (orderId?: number) => {
    return request(`${incentiveApi()}/activity/groupBuy/cancel/${orderId}`, {}, 'GET').then((res: any) => res);
}

/**
 * 查看拼团信息
 * @param orderId 
 */
const groupBuy = async (orderId?: number) => {
    console.log(orderId);
    return request(`${incentiveApi()}/activity/groupBuys/${orderId}`, {}, 'GET').then((res: any) => res);
}

/**
 * 查看拼团成就
 * @param orderId 
 */
const groupBuyAchiveMent = async (orderId?: number) => {
    return request(`${incentiveApi()}/activity/groupBuy/detail/${orderId}`, {}, 'GET').then((res: any) => res);
}



















export{
    productList,
    exchangeItem,
    achievement,
    integralDetail,
    getItemPoints,
    shotGetPoint,
    rankList,
    productDetail,
    groupBuys,
    myGroupBuys,
    joinGroup,
    startGroup,
    cancelGroup,
    groupBuy,
    groupBuyAchiveMent
}
