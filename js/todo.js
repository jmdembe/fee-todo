(function() {

    document //submit feature
        .querySelector('form')
        .addEventListener('submit', function storeListItem(event) {   //submit button to store the list item
          event.preventDefault();

          var item = document.querySelector('.new-todo');
          console.log(item.value);
          addListItem(item.value);
        });

    function addListItem(text) {    //adds list items upon entry
        var listItem = document.createElement('li');
        listItem.innerText = text;
        document.querySelector('ul.items').appendChild(listItem);
    }





}());
