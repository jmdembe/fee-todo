(function() {

    document
        .querySelector('form')
        .addEventListener('submit', function storeListItem(event) {   //submit button to store the list item
            event.preventDefault();
            console.log("HELLO!");
        });

    function addListItem(text) {;
        var listItem = document.createElement('li');
        listItem.innerText = text;
        document.querySelector('ul.items').appendChild(listItem);
    }


}());
