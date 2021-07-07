/* eslint-disable */
'use strict';
import {defaultPost} from '../assets/http.js';

const suggestApi = {
  reply(data, suc, fail) {
    defaultPost('/100/Suggest/reply', data, suc, fail);
  },
  query (data, suc, fail) {
    defaultPost('/100/Suggest/query', data, suc, fail);
  }
};

export default suggestApi;
