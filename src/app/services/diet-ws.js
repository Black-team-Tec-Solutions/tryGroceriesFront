import {_api} from './api' 

export const createDietEndpoint = (data) => _api.post('/diet/create',data);

export const getDietEndpoint = (data) => {
    return _api.get('/myDiet',data)
}

export const patchDietEndpoint = (data) => _api.patch('/updateDiet', data);
