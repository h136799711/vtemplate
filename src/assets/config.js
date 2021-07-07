/* eslint-disable */
// tools.js 包含工具方法和固定的配置信息, 后期考虑移植配置信息到config.js 中

import {dbhCache,dbhTool} from '@peter_xiter/dbh-js-tools/index'

const api_url = process.env.VUE_APP_API_ROOT_URI;
const picture_url = process.env.VUE_APP_PICTURE_UPLOAD_URI;
const client_id = process.env.VUE_APP_CLIENT_ID;

const getEnvironment = () => {
    return process.env.NODE_ENV;
};
const getRouteMode = () => {
    return process.env.ROUTE_MODE;
};
const getVersion = () => {
    return process.env.VUE_APP_VERSION;
};
const getClientId = () => {
    if (!dbhTool.getClientId()) {
        // 缓存没有的情况下 返回默认
        return client_id;
    }
    return dbhTool.getClientId();
};

const getApiUrl = () => {
    return dbhTool.getApiUrl(api_url);
};

const getAvatarUploadUrl = () => {
    return dbhTool.getAvatarUploadUrl(picture_url);
};

export {
    getRouteMode,
    getVersion,
    getApiUrl,
    getAvatarUploadUrl,
    getClientId,
    getEnvironment
};
