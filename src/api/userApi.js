/* eslint-disable */
'use strict'
import {defaultPost} from '../assets/http.js'
import { dbhCache } from '@peter_xiter/dbh-js-tools'

const userApi = {
    resetPwd: (data, suc, fail) => {
        defaultPost('/100/UserAccount/resetPwd', data, suc, fail)
    },
    detail: (data, suc, fail) => {
        defaultPost('/100/UserAccount/detail', data, suc, fail)
    },
    queryLog: (data, suc, fail) => {
        defaultPost('/100/UserLog/query', data, suc, fail)
    },
    querySession: (data, suc, fail) => {
        defaultPost('/100/LoginSession/query', data, suc, fail)
    },
    logoutSession: (data, suc, fail) => {
        defaultPost('/100/LoginSession/logout', data, suc, fail)
    },
    async turnOn2StepVerify(data) {
        return promisePost('/100/UserAccount/turnOn2StepVerify', data);
    },
    async turnOff2StepVerify(data) {
        return promisePost('/100/UserAccount/turnOff2StepVerify', data);
    },
    updateLimit: (data, suc, fail) => {
        defaultPost('/100/UserAccount/updateLimit', data, suc, fail)
    },
    bindPhone: (data, suc, fail) => {
        defaultPost('/100/UserAccount/bindNewPhone', data, suc, fail)
    },
    sendAuthCode: (data, suc, fail) => {
        defaultPost('/100/SecurityCode/createAndSend', data, suc, fail)
    },
    sendAuthEmail(data, suc, fail) {
        defaultPost('/100/UserAccount/sendAuthEmail', data, suc, fail)
    },
    registerByMobileCode (data, suc, fail)  {
        defaultPost('/100/UserAccount/registerByMobile', data, suc, fail)
    },
    update(data, suc, fail) {
        defaultPost('/100/UserProfile/update', data, suc, fail)
    },
    updateInfo (data, suc, fail)  {
        defaultPost('/100/UserAccount/updateInfo', data, suc, fail)
    },
    disable (data, suc, fail) {
        defaultPost('/100/UserAccount/disable', data, suc, fail)
    },
    enable (data, suc, fail) {
        defaultPost('/100/UserAccount/enable', data, suc, fail)
    },
    updatePassword (data, suc, fail) {
        defaultPost('/100/UserLoginSession/updatePassword', data, suc, fail)
    },
    queryByPagingNoCount(data, suc, fail) {
        defaultPost('/100/UserAccount/queryForAjax', data, suc, fail)
    },
    queryByPaging(data, suc, fail) {
        defaultPost('/100/UserAccount/query', data, suc, fail)
    },
    logout(data , suc, fail) {
        // console.debug('[ajax] userApi::logout 用户登出', data)
        dbhCache.clearAll()
        defaultPost('/100/UserLoginSession/logout', data, suc, fail)
    },
    login (data, suc,fail) {
        // console.debug('[ajax] userApi::login 用户登录', data)
        defaultPost('/100/UserLoginSession/loginByMobilePassword', data, suc, fail)
    },
    getUserData (suc, fail) {
        defaultPost('/100/UserLoginSession/adminData', {lc_key: '100_user_admin_data', lc_expire: 1200}, suc, fail)
    },
    updateNicknameHead (data, suc, fail) {
        defaultPost('/100/UserLoginSession/updateInfo', data, suc, fail)
    }
}

export default userApi
