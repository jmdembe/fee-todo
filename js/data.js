(function (){
    window.todos = window.todos || {};

      var toDoList = [];
      var incompleteCounter = 0;


      window.todos.addTodoData = function addTodoData(text) {
        incompleteCounter++;

        var itemList = {
            text: text,
            time: Date.now()
        };

        toDoList.push(itemList);
      }

      window.todos.updateCounter = function updateCounter(change) {
        incompleteCounter += change;
      }

      window.todos.getCounter = function getCounter() {
        return incompleteCounter;
      }

})();
