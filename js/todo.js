(function() {

    window.arrayProperties = window.arrayProperties || {};

    document
        .querySelector('.items')
        .addEventListener('click', function itemStatus (event) {
              if (event.target.tagName === 'BUTTON' && event.target.className === 'check' ) {
                  console.log("LOOK AT ME!");
                  event.target.parentNode.classList.add('completed');
              }

              if (event.target.tagName === 'BUTTON' && event.target.className === 'delete') {
                  event.target.parentNode.removeChild('article');
              }
        });


})();
