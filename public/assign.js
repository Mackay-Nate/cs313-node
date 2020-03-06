
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

      //display names
      for (var i = 0; i < data.member.length - 1; i++) {
        //var li = document.createElement('li');
        var check = document.createElement('input');
        check.setAttribute('type', 'radio');
        check.setAttribute('id', data.member[i].firstname);
        member.appendChild(check);
        var la = document.createElement('label');
        la.setAttribute('for', data.member[i].firstname);
        la.innerHTML = data.member[i].firstname;
        member.appendChild(la);
        member.appendChild(document.createElement('br'));
      }
    }
  }

  //the json is from the database here
  xmlHttpRequest.open('GET', 'https://nate-node.herokuapp.com/week', true);
  xmlHttpRequest.send();
}

function storeJob() { 
  var radio = document.getElementById('member');
  for (var i = 0; i < radio.length; i++) {
    if (radio.checked) {
      console.log(radio.innerHTML);
      var chore = document.getElementById('chore1').innerHTML;

    }
  }

}
