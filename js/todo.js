(function() {

    window.todos = window.todos || {};


    document //submit feature
        .querySelector('form')
        .addEventListener('submit', function storeListItem(event) {   //submit button to store the list item
          event.preventDefault();

          var item = document.querySelector('.new-todo');
          addListItem(item.value);

          window.todos.addTodoData(item.value);

          updateIncompleteCounterUI();

      });

      function addListItem(text) {    //adds list items upon entry
          var listItem = document.createElement('li');
          var addArticle = document.createElement('article');

          var checkButton = document.createElement('button');
          checkButton.classList.add('check');
          addArticle.appendChild(checkButton);

          var addP = document.createElement('p');
          addP.innerText = text;
          addArticle.appendChild(addP);

          var deleteButton = document.createElement('button');
          deleteButton.classList.add('delete');
          deleteButton.innerText = 'X';
          addArticle.appendChild(deleteButton);

          listItem.appendChild(addArticle);
          document.querySelector('ul.items').appendChild(listItem);
        }

    document
        .querySelector('.items')
        .addEventListener('click', function itemStatus (event) {
              if (event.target.tagName === 'BUTTON' && event.target.className === 'check' ) {
                  console.log("LOOK AT ME!");

                  if (event.target.parentNode.className === 'completed') {
                      event.target.parentNode.classList.remove('completed');
                      window.todos.updateCounter(1);
                  } else {
                      event.target.parentNode.classList.add('completed');
                      window.todos.updateCounter(-1);
                  }
                  updateIncompleteCounterUI();

              }

              if (event.target.tagName === 'BUTTON' && event.target.className === 'delete') {
                  document.querySelector('.items').removeChild(event.target.parentNode.parentNode);
                  // update the counter!!
                  // also, can we remove that object from our data array??
              }
        });

        function updateIncompleteCounterUI() {
          document.querySelector('.incomplete-items').innerText = window.todos.getCounter();
        }


})();
