var app = new Vue({
  el: '#app',
  data: {
    headerHtml: '<h1>Hello Vue!</h1>',
    message: 'Hello Vue!',
    link: 'https://github.com/vuejs/vue',
    date: '',
  },
  computed: {
    computedDate: function() {
      return new Date();
    }
  },
  methods: {
    methodsDate: function() {
      this.date =  new Date();
    }
  }
})