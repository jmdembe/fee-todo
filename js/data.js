(function (){
    window.arrayProperties = window.arrayProperties || {};

      var toDoList = [];
      var counter = 0;

      document //submit feature
          .querySelector('form')
          .addEventListener('submit', function storeListItem(event) {   //submit button to store the list item
            event.preventDefault();

            var item = document.querySelector('.new-todo');
            addListItem(item.value);
            counter++;

            var itemList = {
                text: item.value,
                time: Date.now()
            };

            toDoList.push(itemList);
            arrayProperties[counter] = counter;
            arrayProperties[itemList] = itemList;

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

})();
