
var emptyClass = document.getElementsByClassName('empty');
var breakfast  = document.getElementsByClassName('breakfast');

function assignChores() {

  //get the assignments from the database
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {
      //manipulate the DOM with the assignments 
      console.log('inside if statement');
      var data = JSON.parse(xmlHttpRequest.responseText);
  
      // Make breakfast assignments
      for (var i = 0; i < data.breakfast.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[5].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.breakfast[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.breakfast[i].nameid -1].firstname);
        if (data.member[data.breakfast[i].nameid - 1].firstname) {
          breakfast[i].appendChild(header);
          breakfast[i].appendChild(day);
        }
      }

      // Empty the dishwasher assignments
      for (var i = 0; i < data.empty.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[14].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.empty[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.empty[i].nameid -1].firstname);
        emptyClass[i].appendChild(header);
        emptyClass[i].appendChild(day);
      }

    }
  }

  //the json is from the database here
  xmlHttpRequest.open('GET', 'https://nate-node.herokuapp.com/week', true);
  xmlHttpRequest.send();
}