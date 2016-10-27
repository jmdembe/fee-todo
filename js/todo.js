(function() {

    document
        .querySelector('form')
        .addEventListener('submit', function storeListItem(event) {   //submit button to store the list item
            event.preventDefault();
            console.log("HELLO!");
        });

}());
