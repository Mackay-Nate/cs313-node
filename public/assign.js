
function makeAssign() { 
  document.getElementById('login').style.display = "none";
  document.getElementById('swiper').style.display = "none";
  document.getElementById('createChore').style.visibility = "initial";
  var member = document.getElementById('member');
  
  //get the assignments from the database
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {
      //manipulate the DOM with the assignments 
      console.log('inside if statement');
      var data = JSON.parse(xmlHttpRequest.responseText);


      //get names
      for (var i = 0; i < data.member.length; i++) {
        var li = document.createElement('li');
        var check = document.createElement('input');
        check.setAttribute('type', 'radio');
        check.setAttribute('id', data.member[i].firstname)
        check.innerHTML = data.member[i].firstname;
        //li.setAttribute('onclick', 'doSomething();');
        li.appendChild(check);
        member.appendChild(li);

      }

    }

  }

  //the json is from the database here
  xmlHttpRequest.open('GET', 'https://nate-node.herokuapp.com/week', true);
  xmlHttpRequest.send();

}