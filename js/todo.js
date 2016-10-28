(function() {

    var arrayList = [];

    var checkItem = document.querySelector('button.check');
    var removeItem = document.querySelector('button.delete');

    document //submit feature
        .querySelector('form')
        .addEventListener('submit', function storeListItem(event) {   //submit button to store the list item
          event.preventDefault();

          var item = document.querySelector('.new-todo');
          addListItem(item.value);

          var itemList = {
              text: item.value,
              time: Date.now()
          };

          arrayList.push(itemList);
          console.log(arrayList);
        });

    function addListItem(text) {    //adds list items upon entry
        var listItem = document.createElement('li');
        listItem.innerText = text;
        document.querySelector('ul.items').appendChild(listItem);
    }





}());
