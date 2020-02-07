var parsed_message = new Vue({
  data: {
    value: ''
  }
}
)

Vue.component('fix-message', {
  props: ['value'],
  template: `
  <textarea
    rows=15
    cols=50
    id="input_message"
    placeholder="your fix message goes here"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value); humanizeFix($event.target.value)"
    >
  </textarea>
  `,
  methods: {
    humanizeFix: function (fix_string) {
      app.humanized_message = fix_string.replace(/\\u0001/gi, '\n')
    }
  }
})

Vue.component('output-message', {
  props: ['value'],
  template: `
  <textarea
    rows=15
    cols=50
    readonly
    id="output_message"
    placeholder="your output will be here"
    v-bind:value="value"
    >
  </textarea>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    name: 'humanfix',
    humanized_message: ''
  }
})

