import user from './modules/user'
import {createStore} from 'vuex'

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  modules: {
    user
  },
  strict: debug
});
export default  store
