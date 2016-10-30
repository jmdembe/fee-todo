(function() {

    window.arrayList = window.arrayList || [];
    var counter = 0 ;

    document
        .querySelector('.items')
        .addEventListener('click', function completedItem (event) {
              if (event.target.tagName === 'BUTTON' && event.target.className === 'check' ) {
                  console.log("LOOK AT ME!");
                  event.target.parentNode.classList.add('completed');

              }

        });
      console.log(arrayList);


})();
