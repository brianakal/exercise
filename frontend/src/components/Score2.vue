<template>
  <div style="background: #cecece; padding: 10px; margin: 20px;">
    <slot></slot>
    {{ value2 }}

    <div>
      <MyButton2 @tekan2="minus">-</MyButton2>
      <MyButton2 @tekan2="plus">+</MyButton2>
    </div>
  </div>
</template>

<script>
import MyButton2 from './MyButton2'

export default {

  components: {
    MyButton2
  },

  props: [
    'value2',
    'label'
  ],

  methods: {
    plus() {
      this.$emit('update', {
        label: this.label,
        score: this.value2 + 1
      })
    },

    minus() {
      this.$emit('update', {
        label: this.label,
        score: this.value2 - 1
      })
    },
  }

}
</script>
