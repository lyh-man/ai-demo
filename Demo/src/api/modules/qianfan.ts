import http from '/@/api/request'

const urlPrefix = '/qianfan'
const appId = import.meta.env.VITE_APP_ID_QIAN_FAN
const appToken = import.meta.env.VITE_APP_TOKEN_QIAN_FAN

export const conversation =  async (data) => {
    return await http({
        url: urlPrefix + '/app/conversation',
        method: 'post',
        data: {
            'app_id': appId,
        },
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + appToken
        }
    })
}
