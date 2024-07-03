import http from '@/api/request'

export const conversation =  async (data) => {
    return await http({
        url: '/app/conversation',
        method: 'post',
        data: {
            'app_id': 'b8047ab5-8d8e-4e91-b541-f8564d72d408',
        },
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + 'bce-v3/ALTAK-q9B9IrqqAtodXSNoofgkk/e5496860749c31f093166f8e8f3a26ecde405807'
        }
    })
}
