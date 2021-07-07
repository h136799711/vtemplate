/* eslint-disable */
'use strict';
import {defaultPost} from '../assets/http.js';

const apiLogApi = {
  query (data, suc, fail) {
    defaultPost('/100/Log/queryApi', data, suc, fail);
  }
};

export default apiLogApi;
