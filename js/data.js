(function (){
    if (typeof(window.arrayList) !== 'object') {
      window.fee = [];

      var item = document.querySelector('.new-todo');
      addListItem(item.value);

      var itemList = {
          text: item.value,
          time: Date.now()
      };

      arrayList.push(itemList);
      console.log(arrayList);

})();
