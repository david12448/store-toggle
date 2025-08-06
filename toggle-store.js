function toggleStoreList(listId) {
  var list = document.getElementById(listId);
  if (list.classList.contains('active')) {
    list.classList.remove('active');
  } else {
    list.classList.add('active');
  }
}
