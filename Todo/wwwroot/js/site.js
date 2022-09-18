function deleteTodo(i){
  $.ajax({
    url: 'Home/Delete',
    type: 'Post',
    data: {
      id: i
    },
    success: function() {
      window.location.reload()
    }
  })
}