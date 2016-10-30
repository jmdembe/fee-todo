(function() {

    window.arrayList = window.arrayList || [];
    var counter = 0 ;

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
          .addEventListener('click', function completedItem (event) {


          });

})();
