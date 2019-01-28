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
      this.todolist.push({
        text: this.newtodolist
      });
    },

    /**
     * @returns {void}
     */
    removeTodo(index) {
      this.todolist.splice(index, 1);
    },

    /**
     * @returns {void}
     */
    saveTodoState() {
      //
    }
  }
})
