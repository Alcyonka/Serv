function buildList() {
    var newList = document.createElement("ul");
    var newListItem;
    document.body.appendChild(newList);

    for (var i = 1; i <= 100; i++) {
        newListItem = document.createElement('li');
        newListItem.textContent = i;
        newListItem.className = 'numer' +i;
        newList.appendChild(newListItem);
    }
}

buildList();