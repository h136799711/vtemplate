/* eslint-disable */
'use strict'
import {defaultPost} from '../assets/http.js'

const articleApi = {
    create (data, suc, fail) {
        defaultPost('/100/CmsArticle/create', data, suc, fail)
    },
    update (data, suc, fail) {
        defaultPost('/100/CmsArticle/update', data, suc, fail)
    },
    query (data, suc, fail) {
        defaultPost('/100/CmsArticle/queryAdmin', data, suc, fail)
    },
    cate (data, suc, fail) {
        defaultPost('/100/CmsArticle/cate', data, suc, fail)
    },
    delete (data, suc, fail) {
        defaultPost('/100/CmsArticle/delete', data, suc, fail)
    },
    publish (data, suc, fail) {
        defaultPost('/100/CmsArticle/publish', data, suc, fail)
    },
    draft (data, suc, fail) {
        defaultPost('/100/CmsArticle/draft', data, suc, fail)
    }

}

export default articleApi
