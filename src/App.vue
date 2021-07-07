<style>
  @import url(//at.alicdn.com/t/font_326734_6h3wa1i6etk.css);
  @import "./assets/css/global.css";
  @import './assets/css/animate.css';
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { dbhTool } from '@peter_xiter/dbh-js-tools/index'
import {getVersion, getEnvironment} from './assets/config'

export default {
  name: 'App',
  components: {
  },
  mounted: function () {
    this.initialize()
  },
  methods: {
    initialize () {
      window.dbh = window.dbh || {};
      window.dbh.clientInfo = window.dbh.clientInfo || {};
      let timezone = window.dbh.clientInfo.timezone = dbhTool.getTimezone();
      window.dbh.clientInfo.lang = this.$i18n.locale = dbhTool.getBrowseLanguage()
      if (timezone > 0) timezone = '+' + timezone.toString();
      dbhTool.debug('Environment', getEnvironment());
      dbhTool.debug('Language', window.dbh.clientInfo.lang);
      dbhTool.debug('Timezone', 'GMT' + timezone);
      dbhTool.debug('Build Version', getVersion());
    }
  }
}
</script>
