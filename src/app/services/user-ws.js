import {_api} from './api' 

export const updateUserEndpoint = (data) => _api.patch('/users/editMyUser',data);
