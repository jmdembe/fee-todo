(function ( {

    document
        .querySelector('form')
        .addEventListener('submit', function storeListItem(event) {
            event.preventDefault();
            console.log("HELLO!");
        });


})();
