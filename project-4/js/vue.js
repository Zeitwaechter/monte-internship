var app = new Vue({
  el: '#app',

  data: {
    todolist: [],
    newtodolist: ``
  },

  computed: {
    /**
     * @returns {boolean}
     */
    isFormFilled() {
      return 2 < this.newtodolist.length;
    }
  },

  methods: {
    /**
     * @returns {void}
     */
    addTodo() {
      this.todolists.push({
        text: this.newtodolist
      });
    },

    /**
     * @returns {void}
     */
    removeTodo(index) {
      this.todolists.splice(index, 1);
    },

    /**
     * @returns {void}
     */
    saveTodoState() {
      //
    }
  }
})
