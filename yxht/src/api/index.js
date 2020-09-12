// import request from '../utils/request';
const baseUrl = "http://tesadmin.hniux.cn/api"
import requestHttp from "../utils/http"
export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const Login = query => {
    return requestHttp({
        url: `${baseUrl}/login/login`,
        method: 'post',
        params: query
    });
};
// 首页
export const HomeData = query => {
    return requestHttp({
        url: `${baseUrl}/gamedata/indexnum`,
        method: 'get',
        params: query
    });
};

export const sidebarList = query => {
    return requestHttp({
        url: `${baseUrl}/menu/menu`,
        method: 'get',
        params: query
    });
};

export const userlist = () => {
    return requestHttp({
        url: `${baseUrl}/user/user_list`,
        method: 'get'
    });
};

export const qbuserlist = (query) => {
    return requestHttp({
        url: `${baseUrl}/menu/menu_list`,
        method: 'get',
        params:query
    });
};

export const adduser = (query) => {
    return requestHttp({
        url: `${baseUrl}/user/user_add`,
        method: 'get',
        params:query
    });
};

export const detailsuser = (query) => {
    return requestHttp({
        url: `${baseUrl}/user/user_details`,
        method: 'get',
        params:query
    });
};
// 信息修改
export const saveuser = (query) => {
    return requestHttp({
        url: `${baseUrl}/user/user_save`,
        method: 'post',
        params:query
    });
};

// 游戏列表
export const youxilist = (query) => {
    return requestHttp({
        url: `${baseUrl}/game/game_list`,
        method: 'get',
        params:query
    });
};

// 添加游戏
export const addyouxi = (query) => {
    return requestHttp({
        url: `${baseUrl}/game/game_add`,
        method: 'post',
        params:query
    });
};
// 删除游戏
export const delyouxi = (query) => {
    return requestHttp({
        url: `${baseUrl}/game/game_delete`,
        method: 'get',
        params:query
    });
};

// 编辑游戏
export const saveyouxi = (query) => {
    return requestHttp({
        url: `${baseUrl}/game/game_save`,
        method: 'post',
        params:query
    });
};
// 详情游戏
export const detailyouxi = (query) => {
    return requestHttp({
        url: `${baseUrl}/game/game_details`,
        method: 'get',
        params:query
    });
};
// 游戏列表
export const youxilistData = (query) => {
    return requestHttp({
        url: `${baseUrl}/gamedata/game_data`,
        method: 'get',
        params:query
    });
};

// 添加类目
export const addmenu = (query) => {
    return requestHttp({
        url: `${baseUrl}/menu/menu_add`,
        method: 'get',
        params:query
    });
};

// 用户类目列表
export const menuList = (query) => {
    return requestHttp({
        url: `${baseUrl}/menu/menu_list_array`,
        method: 'get',
        params:query
    });
};

// 用户类目列表删除
export const delmenu = (query) => {
    return requestHttp({
        url: `${baseUrl}/menu/menu_delete`,
        method: 'get',
        params:query
    });
};