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
    humanizeFix: function (what) {
      fixed = what.replace(/\\u0001/gi, '\n')
      console.log(fixed)
      app.humanized_message = fixed
      // parsed_message.value = what + "!"
      // alert(this.text)
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
  },
  methods: {
    humanizeFixMessage() {
      alert("AAA")
    }
  }
})

