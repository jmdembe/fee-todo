(function() {

    window.arrayProperties = window.arrayProperties || {};

    document
        .querySelector('.items')
        .addEventListener('click', function completedItem (event) {
              if (event.target.tagName === 'BUTTON' && event.target.className === 'check' ) {
                  console.log("LOOK AT ME!");
                  event.target.parentNode.classList.add('completed');
              }

              if (event.target.tagName === 'BUTTON' && event.target.className === 'delete' ) {
                  console.log("Next up-removing list items");
              }
        });
      console.log(arrayProperties);


})();
