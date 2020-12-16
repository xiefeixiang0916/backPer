import request from '@/utils/request'


// 查询菜单列表
export function listMenu(query) {
    return request({
        url: '/sys-menu-api',
        method: 'get',
        params: query
    })
}
