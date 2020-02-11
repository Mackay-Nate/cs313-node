
var emptyClass = document.getElementsByClassName('empty');
var breakfast  = document.getElementsByClassName('breakfast');
var playroom   = document.getElementsByClassName('play');
var family     = document.getElementsByClassName('family');
var outside    = document.getElementsByClassName('outside');
var bed        = document.getElementsByClassName('bedroom');


function assignChores() {

  //get the assignments from the database
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {
      //manipulate the DOM with the assignments 
      console.log('inside if statement');
      var data = JSON.parse(xmlHttpRequest.responseText);

        // Empty-the-dishwasher assignments
        for (var i = 0; i < data.empty.length; i++) { 
          var header = document.createElement('h4');
          header.innerHTML = data.job[14].jobname;
          var day = document.createElement('p');
          day.innerHTML = data.member[data.empty[i].nameid - 1].firstname;
          day.setAttribute("class", data.member[data.empty[i].nameid -1].firstname);
          emptyClass[i].appendChild(header);
          emptyClass[i].appendChild(day);
        }
      
      // Make-breakfast assignments
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

      // Clean-the-playroom assignments
      for (var i = 0; i < data.play.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[15].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.play[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.play[i].nameid -1].firstname);
        if (data.member[data.play[i].nameid - 1].firstname) {
          playroom[i].appendChild(header);
          playroom[i].appendChild(day);
        }
      }

      // Clean-the-family-room assignments
      for (var i = 0; i < data.family.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[0].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.family[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.family[i].nameid -1].firstname);
        if (data.member[data.family[i].nameid - 1].firstname) {
          family[i].appendChild(header);
          family[i].appendChild(day);
        }
      }

      // Clean-the-outside assignments
      for (var i = 0; i < data.outside.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[16].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.outside[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.outside[i].nameid -1].firstname);
        if (data.member[data.outside[i].nameid - 1].firstname) {
          outside[i].appendChild(header);
          outside[i].appendChild(day);
        } else {
          // outside[i].parentElement.removeChild(outside[i]);
        }
      }

      // Clean-bedroom assignments
      for (var i = 0; i < data.bedroom.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[2].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.bedroom[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.bedroom[i].nameid -1].firstname);
        if (data.member[data.bedroom[i].nameid - 1].firstname) {
          bed[i].appendChild(header);
          bed[i].appendChild(day);
        }
      }













    }
  }

  //the json is from the database here
  xmlHttpRequest.open('GET', 'https://nate-node.herokuapp.com/week', true);
  xmlHttpRequest.send();
}