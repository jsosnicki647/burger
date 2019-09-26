$(function() {
  $(".change-devour").on("click", function() {
    let id = $(this).data("id")
    let newDevour = $(this).data("newdevour")

    let newDevourState = {
      devoured: !newDevour
    }

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured to", newDevour)
        location.reload();
      }
    )
  })

  $(".create-form").on("submit", function(event) {
    event.preventDefault()

    let newBurger = {
      name: $("#ca").val().trim(),
    }

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    )
  })
})