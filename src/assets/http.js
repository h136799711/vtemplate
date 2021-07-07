/* eslint-disable */
import axios from 'axios'
import { dbhTool,dbhCache } from '@peter_xiter/dbh-js-tools/index'
import {getApiUrl, getVersion, getClientId} from "./config";

const convertFormData = function (obj) {
    let fd = new FormData();
    for (let i in obj) {
        if (i === 'lc_key' || i === 'lc_expire') continue;
        if (obj.hasOwnProperty(i)) {
            if (Array.isArray(obj[i])) {
                for (let j = 0; j < obj[i].length; j++) {
                    let value = obj[i][j];
                    if (typeof value === 'number') {
                        value = value.toFixed(2)
                    }
                    fd.append(i + '[' + j + ']', value)
                }
            } else {
                let value = obj[i];
                if (typeof value === 'number') {
                    value = value.toFixed(2)
                }
                fd.append((i), value)
            }
        }
    }
    return fd
};
class HttpError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.name = 'HttpError';
    }

    toString() {
        return this.message;
    }
}
// 支持本地缓存操作
const promisePost = function (servicePath, data) {
    let url = getApiUrl() + servicePath;
    return apiPost(url, data).then((resp) => {
        return resp.data
    })
};
// 支持本地缓存操作
const defaultPost = function (servicePath, data, suc, fail) {
    let url = getApiUrl() + servicePath;
    apiPost(url, data).then((data) => {
        if (typeof suc === 'function') {
            suc(data.data)
        } else {
            window.dbh.alertSuc(data.msg)
        }
    }).catch((err) => {
        if (typeof fail === 'function') {
            fail(err)
        } else {
            window.dbh.alertError(err)
        }
    })
};

const apiPost = function (url, data) {
    if (!data) data = {};
    data.app_version = getVersion();
    data.app_type = 'admin-pc';
    data.client_id = getClientId();
    data.device_type = dbhTool.getDeviceType();
    data.device_token = dbhTool.getSessionId();
    let headers = {
        'Content-Type': 'multipart/form-data',
    };
    let bear = dbhTool.getJwt();
    if (bear.length > 0) {
        headers.Authorization = 'Bearer ' + bear
    }
    // 是否该缓存
    let shouldCache = false;
    // 默认缓存 5分钟
    let localCacheExpire = data.lc_expire || 300;
    let localCacheKey = data.lc_key || '';
    let refreshCache = data.lc_refresh || false;
    if (localCacheKey) {
        shouldCache = true;
        let cacheValue = dbhCache.getBigDataValue(localCacheKey);
        if (cacheValue) {
            if (!refreshCache) {
                let parsedValue = JSON.parse(cacheValue);
                console.debug('cached ', data.lc_key);
                return new Promise((resolve, reject) => {
                    resolve(parsedValue);
                });
            }
        }
    }

    return axios.post(url, convertFormData(data), {
        headers: headers,
        withCredentials: false, // 不携带
        timeout: 30000 // 30秒 超时
    }).then((response) => {
        let data = response.data;
        if (data.code === 1111) {
            window.dbh.alertWarn(dbh.vue_instance.$i18n.t('Please Login Again'));
            window.dbh.vue_instance.$router.push('/login');
           throw new HttpError(data.msg);
        } else {
            if (0 === parseInt(data.code)) {
                if (shouldCache) {
                    dbhCache.setBigDataValue(localCacheKey, JSON.stringify(data), localCacheExpire)
                }
                return data
            } else {
                throw new HttpError(data.msg);
            }
        }
    }).catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            throw new HttpError(error.response.data)
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            throw new HttpError('server no response')
        } else {
            // Something happened in setting up the request that triggered an Error
            throw new HttpError(error.message)
        }
    })
};

export { defaultPost, promisePost}
