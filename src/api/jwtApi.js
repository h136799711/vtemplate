/* eslint-disable */
'use strict'
import {promisePost} from '../assets/http.js'

const jwtApi = {
    async refresh(data) {
        return promisePost('/100/JwtToken/refresh', data);
    }
}

export default jwtApi
