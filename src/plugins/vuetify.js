// app.js
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pl from 'vuetify/es5/locale/pl';

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: {
      pl
    },
    current: 'pl'
  },
  theme: {
    primary: '#F9A825'
  }
});