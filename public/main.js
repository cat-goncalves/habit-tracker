var check = document.getElementsByClassName("fas fa-calendar-check");
var trash = document.getElementsByClassName("fa-trash");

Array.from(check).forEach(function(element) {
      element.addEventListener('click', function(){
        const habit = this.parentNode.parentNode.childNodes[3].innerText

        const parent = this.parentNode.parentNode.childNodes
        for(let i=0; i<parent.length; i++){
          console.log(parent[i])
  }
        fetch('habit-tracker', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'habit': habit,
            'complete':true
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          // window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const habit = this.parentNode.parentNode.childNodes[1].innerText
        fetch('habit-tracker', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'habits': habit,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
