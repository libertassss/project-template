import { request } from '../request';
import { incentiveApi } from '../config';

const getData = async () => {
    return request(`${incentiveApi()}/users/point`, {}, 'GET').then( (res: any) => res);
};



export {
    getData
}

