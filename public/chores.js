
var emptyClass = document.getElementsByClassName('empty');
var breakfast  = document.getElementsByClassName('breakfast');
var playroom   = document.getElementsByClassName('play');
var family     = document.getElementsByClassName('family');
var outside    = document.getElementsByClassName('outside');
var bed        = document.getElementsByClassName('bedroom');
var j = 0;

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
          emptyClass[j].appendChild(header);
          emptyClass[j].appendChild(day);
          j++;
        } else {
          j++;
        }
      
      // Make-breakfast assignments
      j = 0;
      for (var i = 0; i < data.breakfast.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[5].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.breakfast[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.breakfast[i].nameid -1].firstname);
        if (data.member[data.breakfast[i].nameid - 1].firstname) {
          breakfast[j].appendChild(header);
          breakfast[j].appendChild(day);
          j++;
        } else {
          j++;
        }
      }

      // Clean-the-playroom assignments
      j = 0;
      for (var i = 0; i < data.play.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[15].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.play[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.play[i].nameid -1].firstname);
        if (data.member[data.play[i].nameid - 1].firstname) {
          playroom[j].appendChild(header);
          playroom[j].appendChild(day);
          j++;
        } else {
          j++;
        }
      }

      // Clean-the-family-room assignments
      j = 0;
      for (var i = 0; i < data.family.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[0].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.family[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.family[i].nameid -1].firstname);
        if (data.member[data.family[i].nameid - 1].firstname) {
          family[j].appendChild(header);
          family[j].appendChild(day);
          j++;
        } else {
          j++;
        }
      }

      // Clean-the-outside assignments
      j = 0;
      for (var i = 0; i < data.outside.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[16].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.outside[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.outside[i].nameid -1].firstname);
        console.log("index i = " + i);
        if (data.member[data.outside[i].nameid - 1].firstname) {
          outside[j].appendChild(header);
          outside[j].appendChild(day);
          j++;
        } else {
          console.log(j);
          outside[j].parentElement.removeChild(outside[j]);
        }
      }

      // Clean-bedroom assignments
      j = 0;
      for (var i = 0; i < data.bedroom.length; i++) { 
        var header = document.createElement('h4');
        header.innerHTML = data.job[2].jobname;
        var day = document.createElement('p');
        day.innerHTML = data.member[data.bedroom[i].nameid - 1].firstname;
        day.setAttribute("class", data.member[data.bedroom[i].nameid -1].firstname);
        if (data.member[data.bedroom[i].nameid - 1].firstname) {
          bed[j].appendChild(header);
          bed[j].appendChild(day);
          j++;
        } else {
          j++;
        }
      }













    }
  }

  //the json is from the database here
  xmlHttpRequest.open('GET', 'https://nate-node.herokuapp.com/week', true);
  xmlHttpRequest.send();
}