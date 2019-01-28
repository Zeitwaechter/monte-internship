<template>
  <div class="todo-wrapper">
    {{ getMessageText }}
  </div>
</template>

<script>
export default {

  props: {
    id : {
      required: true,
      type: String,
    }
  },

  components: {
    //
  },

  data() {
    return {
      message: ``;
    }
  },

  computed: {
    getMessageText() {
      return this.message;
    }
  },

  methods: {

  },

  /****
   ** Vue Life Cycle
   ****/

  mounted() {
    //
  },

  beforeCreate() {
    //
  },

  created() {
    this.message = `Hello World!`;
  },

  beforeUpdate() {
    //
  },

  updated() {
    //
  },

  beforeDestroy() {
    //
  },


};
</script>
